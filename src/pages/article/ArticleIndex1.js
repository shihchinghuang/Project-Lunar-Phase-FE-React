import React from "react";
import "./articleIndex.scss";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

// import LunarPhaseHeader from "../article/components/LunarPhaseHeader.js";
import ArticleCard from "./components/ArticleCard.js";
import App from "./components/App.js";
import User from "./components/User.js";
// import ArticleCategory from "../article/components/ArticleCategory.js";
import ArticleCarousel from "./components/ArticleCarousel.js";
// import InfiniteScroll from "../article/components/InfiniteScroll.js";
import "../../styles/global.scss";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// https://react-bootstrap.github.io/components/carousel/
// https://ithelp.ithome.com.tw/articles/10227641

const ArticleIndex1 = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="index ">
        <ArticleCarousel />
        {/* 右邊svg開始 */}
        {/* <div className="bg-icon-1">
          <img src="./bg-svg/Group 965.svg" alt="" />
        </div> */}
        {/*右邊svg結束 */}
        <img
          src="./bg-svg/wave.svg"
          style={{
            width: "100%",
            position: "absolute",
            top: "600px",
            right: "0px",
            zIndex: "-1",
          }}
          alt=""
          className="w-100  mt-5"
        />
        {/* 第二頁分類文章區塊開始 */}
        <div className="container">
          <div
            className="mx-auto"
            style={{ position: "relative", marginTop: "150px" }}
          >
            <h3 className="text-center my-5">｜分類文章｜</h3>
          </div>
          <div className="container my-5">
            <div className="w-100 border-top border-bottom border-dark ">
              <div className="m-auto w-50 text-center category d-flex justify-content-between py-3">
                <Link to="/article1">
                  <div className="article-category-selected-btn text-decoration-none">
                    衛教資訊
                  </div>
                </Link>
                <Link to="/article2">
                  <div className="article-category-btn text-decoration-none">
                    性教育
                  </div>
                </Link>

                <Link to="/article3">
                  <div
                    className="article-category-btn text-decoration-none"
                    href
                  >
                    性別故事
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="category d-flex">
            <button className="m-4 btn-soft-green-s">衛教文章</button>
            <button className="m-4 btn-soft-green-s">性教育</button>
            <button className="m-4 btn-soft-green-s">性別故事</button>
          </div> */}
          <ArticleCard />
          {/* <div id="article" className="index-article container-fluid">
            <div className="row">
              <div className="index-article-unit-wrap row text-left col-12 mx-auto">
                <div className="border-right-2 index-article-unit col-4 col-md-6 col-lg-3 pl-3 pr-3 mb-5 mb-md-4 mb-lg-0">
                  <p className="index-article-date mb-1">2020.02.20</p>
                  <div className="index-article-unit-img col-12 p-0">
                    <a href>
                      <img src="/img/Index/hero001.jpg" alt="" />
                      <h5 className="h5-tc my-2">文章標題222</h5>
                    </a>
                  </div>
                  <div className="d-flex justify-content-between align-items-end pb-0 mt-4">
                    <div className="btn-read text-center">
                      <a href>read</a>
                    </div>
                    <div className="text-right">
                      <a className="btn-tag ml-2" href>
                        #123
                      </a>
                      <a className="btn-tag ml-2" href>
                        #123
                      </a>
                    </div>
                  </div>
                </div>
                <div className="border-right-1 index-article-unit col-4 col-md-6 col-lg-3 pl-3 pr-3 mb-5 mb-md-4 mb-lg-0">
                  <p className="index-article-date mb-1">2020.02.20</p>
                  <div className="index-article-unit-img col-12 p-0">
                    <a href>
                      <img src="/img/Index/hero001.jpg" alt="" />
                      <h5 className="h5-tc my-2">文章標題222</h5>
                    </a>
                  </div>
                  <div className="d-flex justify-content-between align-items-end pb-0 mt-4">
                    <div className="btn-read text-center">
                      <a href>read</a>
                    </div>
                    <div className="text-right">
                      <a className="btn-tag ml-2" href>
                        #123
                      </a>
                      <a className="btn-tag ml-2" href>
                        #123
                      </a>
                    </div>
                  </div>
                </div>
                <div className="index-article-unit col-4 col-md-6 col-lg-3 pl-3 pr-3 mb-5 mb-md-4 mb-lg-0">
                  <p className="index-article-date mb-1">2020.02.20</p>
                  <div className="index-article-unit-img col-12 p-0">
                    <a href>
                      <img src="/img/Index/hero001.jpg" alt="" />
                      <h5 className="h5-tc my-2">文章標題222</h5>
                    </a>
                  </div>
                  <div className="d-flex justify-content-between align-items-end pb-0 mt-4">
                    <div className="btn-read text-center">
                      <a href>read</a>
                    </div>
                    <div className="text-right">
                      <a className="btn-tag ml-2" href>
                        #123
                      </a>
                      <a className="btn-tag ml-2" href>
                        #123
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="index-article-footer d-flex justify-content-between mx-0 px-0 col-12">
                <div className="d-flex">
                  <a className="btn-prev mr-3" href>
                    <i className="fas fa-chevron-left" />
                  </a>
                  <a className="btn-next" href>
                    <i className="fas fa-chevron-right" />
                  </a>
                </div>
                <a className="btn-more" href>
                  more
                </a>
              </div>
            </div>
          </div> */}

          <div className="more">
            <Link to="/article/health">
              <img src="./bg-svg/more-for-category.svg" alt="" />
            </Link>
          </div>
        </div>

        {/* 第三頁最新文章區塊開始 */}
        <div className="container">
          <div className="new mb-5">
            <h3 className="">｜最新文章｜</h3>
            <div className="mb-3 text-center">
              <img className="w-75" src="./bg-svg/Path 549.svg" alt="" />
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
            {/* <App /> */}
            <User />
          </div>
          {/* <div className="more">
            <a href="http://localhost:3000/articlenew">
              <img src="./bg-svg/more-for-new.svg" alt="" />
            </a>
          </div> */}
        </div>
        {/* 第二頁最新文章區塊結束 */}
      </div>
      <Footer />
    </>
  );
};

export default ArticleIndex1;
