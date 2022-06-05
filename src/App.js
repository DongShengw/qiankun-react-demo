
import React from "react";
import './App.css';
import {BrowserRouter, Routes ,Route} from 'react-router-dom'

import Home from "./model/Home"
import News from "./model/News"
import Phone from "./model/Phone"

function App() {
   return (
        <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/react' : '/'}>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home/>}>
                        {/* 配置嵌套路由*/}
                        {/* 二级路由默认页面 */}
                        {/*<Route index element={<组件1/>} /> */}
                        {/*<Route path="article" element={<Article />} /> */}
                    </Route>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/phone" element={<Phone/>}/>
                </Routes>
            </div>
        </BrowserRouter>
  );
}

export default App;
