import React from "react";
// import './articleDetail.scss'
// import $ from 'jquery'
import Carousel from "react-bootstrap/Carousel";
import "./articleCarousel.scss";
// https://react-bootstrap.github.io/components/carousel/

function ArticleCarousel() {
  return (
    <>
      <Carousel>
        <Carousel.Item className="carousel">
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
          <img
            className="d-block w-100"
            style={{
              height: "600px",
              objectFit: "cover",
            }}
            src="./img/woman-bathtub_CUGFVFAI24.jpeg"
            alt="Third slide"
          />

          <Carousel.Caption className="caption  carousel-inner">
            <h3 className="title">
              [第三張]
              馬來西亞的性別平權，崩壞始於教育：校園長年「月經檢查」、教師拿「強暴」開玩笑
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default ArticleCarousel;
