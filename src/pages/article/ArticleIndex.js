import React from "react";
import "./articleIndex.scss";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// import LunarPhaseHeader from "../article/components/LunarPhaseHeader.js";
import ArticleCard from "../article/components/ArticleCard.js";
import App from "../article/components/App.js";
// import ArticleCategory from "../article/components/ArticleCategory.js";
import ArticleCarousel from "../article/components/ArticleCarousel.js";
// import InfiniteScroll from "../article/components/InfiniteScroll.js";
import "../../styles/global.scss";

// https://react-bootstrap.github.io/components/carousel/
// https://ithelp.ithome.com.tw/articles/10227641

const ArticleIndex = () => {
  return (
    <>
      <div className="index">
        {/* <LunarPhaseHeader /> */}
        <ArticleCarousel />
        {/* 右邊svg開始 */}
        <div className="bg-icon-1">
          <img src="./bg-svg/Group 965.svg" alt="" />
        </div>
        {/*右邊svg結束 */}

        {/* 第二頁分類文章區塊開始 */}
        <div className="container">
          <div className="category d-flex">
            <button className="m-4 btn-soft-green-s">衛教文章</button>
            <button className="m-4 btn-soft-green-s">性教育</button>
            <button className="m-4 btn-soft-green-s">性別故事</button>
          </div>
          <ArticleCard />

          <div className="more">
            <img src="./bg-svg/more-for-category.svg" alt="" />
          </div>
        </div>

        {/* 第三頁最新文章區塊開始 */}
        <div className="container">
          <div className="new mb-5">
            <h3 className="">- 最新文章 -</h3>
            <div className="line">
              <img src="./bg-svg/Path 549.svg" alt="" />
            </div>
            <div className="w-100 text-center">
              <small>
                我必須真正享受生命中的美好事物，因為這讓其他的不美好顯得無關緊要。
              </small>
            </div>
          </div>
          {/* <InfiniteScroll /> */}
          {/* <ArticleCategory /> */}
          <div className="mb-5">
            <App />
          </div>
          {/* <div className="more">
            <a href="http://localhost:3000/articlenew">
              <img src="./bg-svg/more-for-new.svg" alt="" />
            </a>
          </div> */}
        </div>
        {/* 第二頁最新文章區塊結束 */}
      </div>
    </>
  );
};

export default ArticleIndex;
