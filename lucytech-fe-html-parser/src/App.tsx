import './App.css'
import Home from "./components/home/home.component.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Test from "./components/test/test.component.tsx";
import {Layout} from "antd";
import Login from "./components/login/login.component.tsx";


function App() {
    return (
        <BrowserRouter>
            <div>
                <Layout style={{height: '100vh', width: '100vh'}}>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="test/*" element={<Test/>}/>
                        <Route path="login" element={<Login/>}/>
                    </Routes>
                </Layout>
            </div>
        </BrowserRouter>
    );
}

export default App
