import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import $ from 'jquery'

import ArticleIndex1 from "./pages/article/ArticleIndex1.js";
import ArticleIndex2 from "./pages/article/ArticleIndex2.js";
import ArticleIndex3 from "./pages/article/ArticleIndex3.js";
import ArticleHealth from "./pages/article/ArticleHealth.js";
import ArticleDetail from "./pages/article/ArticleDetail.js";
import PeriodRecord from "./pages/article/PeriodRecord.js";
import Home from "./pages/Home.js";

// import TodoApp from './components/TodoApp'

// App角色或工作： 1. 路由器/路由放這 2. 全站使用的狀態（會員是否登入的狀態會記錄在App） 3. 最外層的排版
const App = () => {
  return (
    <Router>
      <>
        {/* 連結表，後續會轉為選單 */}
        {/* 使用a與href有可能會導致頁面刷新，元件會重新回恢初始狀態，導致應用程式的運作失常，所以請儘可能用Link元件 */}
        <Link to="/article1">ArticleIndex1</Link>
        <Link to="/article2">ArticleIndex2</Link>
        <Link to="/article3">ArticleIndex3</Link>
        <Link to="/article/health">ArticleHealth</Link>
        <Link to="/article/detail/2">ArticleDetail</Link>
        <Link to="/periodrecord">PeriodRecord</Link>

        {/* 路由表 */}
        <Switch>
          <Route path="/article/health">
            <ArticleHealth />
          </Route>

          <Route path="/article/detail/:id?">
            <ArticleDetail />
          </Route>
          <Route path="/periodrecord">
            <PeriodRecord />
          </Route>

          <Route path="/article1">
            <ArticleIndex1 />
          </Route>
          <Route path="/article2">
            <ArticleIndex2 />
          </Route>
          <Route path="/article3">
            <ArticleIndex3 />
          </Route>
          {/* 有exact代表網站首頁，exact代表精確比對，只有一個斜線才會成為首頁 */}

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  );
};

export default App;
