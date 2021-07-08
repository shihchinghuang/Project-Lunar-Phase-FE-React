import React from "react";
import "./articleNew.scss";
import ArticleNewCard from "../article/components/ArticleNewCard.js";

const ArticleNew = () => {
  return (
    <>
      <div className="container pt-5">
        <div className="new-new text-center  mt-5">
          <h3 className="">｜分類文章｜</h3>
          <img src="./bg-svg/wave.svg" alt="" className="w-100" />
        </div>

        <div className="index d-flex justify-content-between">
          <div className="left mr-auto">
            <div className="d-flex align-items-center mb-4">
              <img src="./bg-svg/Path 515.svg" className="mr-3" alt="" />
              <p className="m-0 red">衛教文章</p>
            </div>
            <div className="d-flex align-items-center mb-4">
              <img src="./bg-svg/Path 515.svg" className="mr-3" alt="" />
              <p className="m-0">性教育</p>
            </div>
            <div className="d-flex align-items-center mb-4">
              <img src="./bg-svg/Path 515.svg" className="mr-3" alt="" />
              <p className="m-0">性別故事</p>
            </div>
          </div>
          <div className="right">
            <ArticleNewCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleNew;
