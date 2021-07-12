import React from "react";
// import './articleDetail.scss'
// import $ from 'jquery'
import Carousel from "react-bootstrap/Carousel";
import "./articleCarousel.scss";
// https://react-bootstrap.github.io/components/carousel/

function ArticleCarousel() {
  return (
    <>
      {/* <div className="container"> */}
      <Carousel className="carousel">
        <Carousel.Item>
          <a href="http://localhost:3000/articledetail/2">
            <img
              className="d-block w-100"
              style={{
                transform: "scaleX(-1)",
                height: "600px",
                objectFit: "cover",
              }}
              src="https://images.pexels.com/photos/4239010/pexels-photo-4239010.jpeg"
              alt="First slide"
            />
            <Carousel.Caption className="caption carousel-inner">
              <div className="caption-bg"></div>
              <h3 className="title">
                女人生命中長時間相伴的「好朋友」，三種友善地球的永續生理期用品
              </h3>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="http://localhost:3000/articledetail/39">
            <img
              className="d-block w-100"
              style={{
                height: "600px",
                objectFit: "cover",
              }}
              src="https://image1.thenewslens.com/2021/2/1hqsbc1l7jhhuid6vaq4igmc6tws00.jpg"
              alt="Second slide"
            />

            <Carousel.Caption className="caption  carousel-inner">
              <h3 className="title">
                瑞典學校性平教育將強化認知「合意文化」，不把性騷擾「正常化」
              </h3>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="http://localhost:3000/articledetail/41">
            <img
              className="d-block w-100"
              style={{
                height: "600px",
                objectFit: "cover",
              }}
              src="https://heho.com.tw/wp-content/uploads/2019/10/191005-%E7%94%9F%E7%90%86%E6%9C%9F%E7%94%A8%E5%93%81.png"
              alt="Third slide"
            />

            <Carousel.Caption className="caption  carousel-inner">
              <h3 className="title">
                衛生棉、棉條還是月亮杯？優缺點超級比一比！
              </h3>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
      </Carousel>
      {/* </div> */}
    </>
  );
}

export default ArticleCarousel;
