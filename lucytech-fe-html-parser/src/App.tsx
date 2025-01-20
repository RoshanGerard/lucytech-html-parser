import './App.css';
import Home from './components/home/home.component.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Test from './components/test/test.component.tsx';
import Login from './components/login/login.component.tsx';
import {Layout, Menu} from 'antd';

const {Header, Content, Footer} = Layout;

function App() {
    return (
        <BrowserRouter>
            <Layout style={{minHeight: '100vh', width: '100vh'}}>
                <Header style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="title" disabled>
                            <span style={{fontWeight: 'bold'}}>Lucytech's HTML Parser Demo</span>
                        </Menu.Item>
                    </Menu>
                </Header>

                <Content style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '0 50px',
                    marginTop: 64
                }}>
                    <div className="site-layout-content" style={{width: '100%', textAlign: 'center'}}>

                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="test/*" element={<Test/>}/>
                            <Route path="login" element={<Login/>}/>
                        </Routes>
                    </div>
                </Content>

                <Footer style={{textAlign: 'center'}}>©2025 Created by Roshan G. Bolonna</Footer>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
