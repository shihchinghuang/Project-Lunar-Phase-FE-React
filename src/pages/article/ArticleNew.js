import React from "react";
import "./articleNew.scss";
import ArticleCard from "../article/components/ArticleCard.js";

const ArticleNew = () => {
  return (
    <>
      <div className="container pt-5">
        {/* <div className="new-new text-center  mt-5">
          <h3 className="">｜分類文章｜</h3>
          <img src="./bg-svg/wave.svg" alt="" className="w-100" />
        </div> */}

        <div className="index container">
          <div className="m-auto" style={{ position: "relative" }}>
            <h3 className="text-center">｜分類文章｜</h3>
            <img
              src="./bg-svg/wave.svg"
              style={{
                position: "absolute",
                top: "0px",
                right: "0px",
                zIndex: "-1",
              }}
              alt=""
              className="w-100  mt-5"
            />
          </div>
          <div className="container my-5">
            <div className="w-100 border-top border-bottom border-dark ">
              <div className="m-auto w-50 category d-flex justify-content-between p-3">
                <a className="text-dark text-decoration-none" href>
                  衛教文章
                </a>
                <a className="text-dark text-decoration-none" href>
                  性教育
                </a>
                <a className="text-dark text-decoration-none" href>
                  性別故事
                </a>
              </div>
            </div>
          </div>
          {/* <div className="left mr-auto col-2">
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
          </div> */}
          {/* <div className="right"> */}
          <ArticleCard />
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default ArticleNew;
