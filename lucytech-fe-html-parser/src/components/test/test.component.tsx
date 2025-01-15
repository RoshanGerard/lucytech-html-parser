import {Route, Routes, Link} from 'react-router-dom';
import {Layout, Menu, List} from 'antd';

import Home from "../home/home.component.tsx";
import About from "../about/about.component.tsx";

const {Header, Content} = Layout;
const Test: React.FC = () => {
    return (
        <Layout>
            <Header>
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="1">
                        <Link to="/test/home">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/test/about">About</Link></Menu.Item>
                </Menu>
            </Header>

            <Content style={{padding: '0 50px', marginTop: '16px'}}>
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
                <List header={<div>Links</div>} bordered dataSource={
                    [
                        {
                            type: 'internal',
                            path: '/test/home',
                            label: 'Home'
                        },
                        {
                            type: 'internal',
                            path: '/test/about',
                            label: 'About'
                        },
                        {
                            type: 'external',
                            path: 'https://www.google.com',
                            label: 'Google'
                        },
                        {
                            type: 'external',
                            path: 'https://www.github.com',
                            label: 'GitHub'
                        },
                    ]
                }
                      renderItem={item => (
                          <List.Item> {item.type === 'internal' ? (<Link to={item.path}>{item.label}</Link>) : (
                              <a href={item.path} target="_blank"
                                 rel="noopener noreferrer">{item.label}</a>)} </List.Item>)}/>
            </Content>
        </Layout>
    );
}
export default Test;
