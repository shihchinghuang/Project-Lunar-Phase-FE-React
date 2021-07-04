import React from "react";
import "./articleNew.scss";
import ArticleCard from "../article/components/ArticleCard.js";

const ArticleNew = () => {
  return (
    <>
      <div className="container">
        <div className="new">
          <h3>- 最新文章 -</h3>
        </div>

        <div className="index d-flex justify-content-between">
          <div className="left">
            <div className="d-flex align-items-center mb-4">
              <img src="./bg-svg/Path 515.svg" className="mr-3" alt="" />
              <p className="m-0 red">最新文章</p>
            </div>
            <div className="d-flex align-items-center">
              <img className="mr-3" src="./bg-svg/Path 515.svg" alt="" />
              <p className="m-0">分類文章</p>
            </div>
          </div>
          <div className="right">
            <ArticleCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleNew;
