import React from "react";
import "./articleIndex.scss";
import "react-bootstrap";
// import LunarPhaseHeader from "../article/components/LunarPhaseHeader.js";
import ArticleCard from "../article/components/ArticleCard.js";
import ArticleCategory from "../article/components/ArticleCategory.js";
import ArticleCarousel from "../article/components/ArticleCarousel.js";
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
        {/* 第二頁最新文章區塊開始 */}
        <div className="container mt-5">
          <div className="new mt-5">
            <h3>- 最新文章 -</h3>
            <div className="line">
              <img src="./bg-svg/Path 549.svg" alt="" />
            </div>
            <small>
              我必須真正享受生命中的美好事物，因為這讓其他的不美好顯得無關緊要。
            </small>
          </div>
          <ArticleCard />

          <div className="more">
            <img src="./bg-svg/more-for-new.svg" alt="" />
          </div>
        </div>
        {/* 尚未完成：左右箭頭輪播，作者日期無法靠下 */}
        {/* 第二頁最新文章區塊結束 */}
        {/* 第三頁分類文章區塊開始 */}
        <div className="container">
          <div className="category d-flex">
            <button className="m-4 btn-soft-green-s">衛教文章</button>
            <button className="m-4 btn-soft-green-s">性教育</button>
            <button className="m-4 btn-soft-green-s">性別故事</button>
          </div>
          <ArticleCategory />
          <div className="more">
            <img src="./bg-svg/more-for-category.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleIndex;
