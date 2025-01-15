import {Button, Col, Input, Row} from "antd";
import {Content} from "antd/es/layout/layout";
import TextArea from "antd/es/input/TextArea";
import {HtmlPageParserApi} from "../../api/html-parser-service/html-page-parser-api.ts";
import {ChangeEvent, FC, useState} from "react";
import {HtmlContextDetailsRequestDto} from "../../api/html-parser-service/dto/html-context-details.request.dto.ts";
import Loader from "../notification/notification.component.tsx";

const Home: FC = () => {
    const htmlPageParserApi: HtmlPageParserApi = new HtmlPageParserApi();

    const [urlValue, setUrlValue] = useState<string>('');
    const [htmlResult, setHtmlResult] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleTxtUrlChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUrlValue(event.target.value);
    }

    const handleBtnGetInfoClick = async () => {
        try {
            setLoading(true);

            const payload: HtmlContextDetailsRequestDto = new HtmlContextDetailsRequestDto(urlValue);
            const response = await htmlPageParserApi.getHtmlMetadata(payload);

            setHtmlResult(JSON.stringify(response, null, 2));

            console.log(htmlResult);
        } finally {
            setLoading(false);
        }
    }

    return (
        <Content style={{position: 'relative', height: '100vh'}}>
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
