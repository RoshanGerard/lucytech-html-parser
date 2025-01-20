import {Button, Col, Input, notification, Row} from "antd";
import {Content} from "antd/es/layout/layout";
import TextArea from "antd/es/input/TextArea";
import {HtmlPageParserApi} from "../../api/html-parser-service/html-page-parser-api.ts";
import {ChangeEvent, FC, useState} from "react";
import {HtmlContextDetailsRequestDto} from "../../api/html-parser-service/dto/html-context-details.request.dto.ts";
import Loader from "../notification/notification.component.tsx";
import {AxiosError} from "axios";

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const Home: FC = () => {
    const htmlPageParserApi: HtmlPageParserApi = new HtmlPageParserApi();

    const [urlValue, setUrlValue] = useState<string>('');
    const [htmlResult, setHtmlResult] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [api, contextHolder] = notification.useNotification(
        {
            placement: 'topRight',
            top: 50,
            duration: 5,
        }
    );

    // notification.config();

    const handleTxtUrlChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUrlValue(event.target.value);
    }

    const openNotificationWithIcon = (type: NotificationType, title: string, description: string) => {
        api[type]({
            message: title,
            description: description,
        });
    };

    const handleBtnGetInfoClick = async () => {
        try {
            setLoading(true);

            const payload: HtmlContextDetailsRequestDto = new HtmlContextDetailsRequestDto(urlValue);

            await htmlPageParserApi.getHtmlMetadata(payload).then(response => {
                setHtmlResult(JSON.stringify(response, null, 2));
                openNotificationWithIcon('success', 'Parsing Success', 'HTML parsing successfully completed...!');
            }).catch((e: AxiosError) => {
                openNotificationWithIcon('error', 'Error Parsing', e.response.data.payload.error);
            });

        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    return (
        <Content style={{position: 'relative', height: '100vh'}}>
            {contextHolder}
            <Loader loading={loading}/>
            <Row justify="center" align="middle" style={{height: '100%'}}>
                <Col span={18} style={{textAlign: 'center'}}>
                    <Row justify="space-between">
                        <Col span={18}>
                            <Input
                                placeholder="Enter text here"
                                style={{width: '100%'}}
                                type="text"
                                value={urlValue}
                                onChange={handleTxtUrlChange}
                            />
                        </Col>
                        <Col span={6}>
                            <Button type="primary" style={{marginLeft: '10px', width: '100%'}}
                                    onClick={handleBtnGetInfoClick}>Get Info</Button>
                        </Col>
                    </Row>
                    <Row justify="space-between" style={{marginTop: '10px'}}>
                        <Col span={18}>
                            <TextArea rows={10} placeholder="maxLength is 8" maxLength={8} value={htmlResult}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Content>
    );
}

export default Home;
