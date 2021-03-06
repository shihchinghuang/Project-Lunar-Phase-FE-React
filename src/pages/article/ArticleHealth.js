import React from "react";
import "./articleHealth.scss";
import ArticleCard from "./components/ArticleCard.js";
import { Link } from "react-router-dom";
import LunarPhaseNavbar from "../../components/LunarPhaseNavbar";
import Footer from "../../components/Footer";

const ArticleHealth = () => {
  return (
    <>
      <LunarPhaseNavbar />

      <div className="container pt-5">
        <div className="container">
          <div className="m-auto" style={{ position: "relative" }}>
            <h3 className="text-center">｜分類文章｜</h3>
            <img
              src="http://localhost:3333/img/Article/wave.svg"
              style={{
                position: "absolute",
                top: "0px",
                right: "0px",
                zIndex: "-1",
              }}
              alt=""
              className="w-100 mt-5"
            />
          </div>
          <div className="container my-5">
            <div className="w-100 border-top border-bottom border-dark ">
              <div className="m-auto w-50 text-center d-flex justify-content-between p-3">
                <Link to="/article1">
                  <div className="article-category article-category-selected-btn text-decoration-none">
                    衛教資訊
                  </div>
                </Link>
                <Link to="/article2">
                  <div className="article-category article-category-btn text-decoration-none">
                    性教育
                  </div>
                </Link>
                <Link to="/article3">
                  <div className="article-category article-category-btn text-decoration-none">
                    性別故事
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* <ArticleCard /> */}
          <div className="container row d-flex mx-auto mt-3">
            <div className="article-card-col-4 col-12 col-md-6 col-lg-4 mt-3">
              <Link
                to="/article/detail/35"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="article-card-hover">
                  <img
                    className=" w-100 mb-3"
                    style={{ height: "230px", objectFit: "cover" }}
                    src="https://image1.thenewslens.com/2020/11/7l6wfj58259t97nyo418ydjummny89.jpg"
                    alt=""
                  />
                  <div className="w-100">
                    <h5 className="mb-4 text-left">
                      第一次使用棉條就上手！寫給妳的全方位使用教學指南
                    </h5>
                    <div className="d-flex justify-content-between w-100">
                      <p>Audrey Ko</p>
                      <p>2021-02-03</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="article-card-col-4 col-12 col-md-6 col-lg-4 mt-3">
              <Link
                to="/article/detail/24"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="article-card-hover">
                  <img
                    className="w-100  mb-3"
                    style={{ height: "230px", objectFit: "cover" }}
                    src="https://castle.womany.net/images/content/pictures/33702/womany_mooncup_1441783172-29443-5169.jpg"
                    alt=""
                  />
                  <div className="w-100">
                    <h5 className="mb-4 text-left">
                      給你的寵愛身體懶人包：第一次月亮杯就上手
                    </h5>
                    <div className="d-flex justify-content-between w-100">
                      <p>慢慢說</p>
                      <p>2021-02-03</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="article-card-col-4 col-12 col-md-6 col-lg-4 mt-3">
              <Link
                to="/article/detail/48"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="article-card-hover">
                  <img
                    className=" w-100 mb-3 "
                    style={{ height: "230px", objectFit: "cover" }}
                    src="https://images.unsplash.com/photo-1445384763658-0400939829cd"
                    alt=""
                  />
                  <div className="w-100">
                    <h5 className="mb-4 text-left">
                      新種月事用品　溫柔對待你的「好朋友」
                    </h5>
                    <div className="d-flex justify-content-between w-100">
                      <p>林以璿</p>
                      <p>2021-06-07</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="article-card-col-4 col-12 col-md-6 col-lg-4 mt-3">
              <Link
                to="/article/detail/37"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="article-card-hover">
                  <img
                    className=" w-100 mb-3 "
                    style={{ height: "230px", objectFit: "cover" }}
                    src="https://castle.womany.net/images/content/pictures/64694/womany_mian_tiao_5_1506576980-9990-9576.jpg"
                    alt=""
                  />
                  <div className="w-100">
                    <h5 className="mb-4 text-left">
                      享受棉條帶給妳的自由！別怕，九個好處讓你愛上棉條
                    </h5>
                    <div className="d-flex justify-content-between w-100">
                      <p>Rachel</p>
                      <p>2021-06-26</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="article-card-col-4 col-12 col-md-6 col-lg-4 mt-3">
              <Link
                to="/article/detail/36"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="article-card-hover">
                  <img
                    className=" w-100 mb-3 "
                    style={{ height: "230px", objectFit: "cover" }}
                    src="https://castle.womany.net/images/content/pictures/64697/womany_mian_tiao_4_1506578832-5569-2391.jpg"
                    alt=""
                  />
                  <div className="w-100">
                    <h5 className="mb-4 text-left">
                      為什麼台灣女生不太敢用衛生棉條？聽聽作者親身經歷...
                    </h5>
                    <div className="d-flex justify-content-between w-100">
                      <p>Fairy Chang</p>
                      <p>2021-06-25</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ArticleHealth;
