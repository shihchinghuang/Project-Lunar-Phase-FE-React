import React from 'react'
// import './articleDetail.scss'
// import $ from 'jquery'
import Carousel from 'react-bootstrap/Carousel'
import './articleCarousel.scss'
// https://react-bootstrap.github.io/components/carousel/

function ArticleCarousel() {
  
  return (
    <>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./img/Image 7.png"
      alt="First slide"
    />
   <Carousel.Caption className="caption">
      <h3 className="title">[第一張] 馬來西亞的性別平權，崩壞始於教育：校園長年「月經檢查」、教師拿「強暴」開玩笑</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./img/Group 965.jpeg"
      alt="Second slide"
    />

<Carousel.Caption className="caption">
      <h3 className="title">[第二張] 馬來西亞的性別平權，崩壞始於教育：校園長年「月經檢查」、教師拿「強暴」開玩笑</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./img/woman-bathtub_CUGFVFAI24.jpeg"
      alt="Third slide"
    />

<Carousel.Caption className="caption">
      <h3 className="title">[第三張] 馬來西亞的性別平權，崩壞始於教育：校園長年「月經檢查」、教師拿「強暴」開玩笑</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </>
  )
}

export default ArticleCarousel;
