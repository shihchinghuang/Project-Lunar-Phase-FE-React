import React from 'react'
import './articleIndex.scss'
import   'react-bootstrap'
import ArticleCarousel from '../../components/ArticleCarousel.js'
import Nav from '../../components/Nav.js'
import ArticleCard from '../../components/ArticleCard.js'
import '../../styles/global.scss'



// https://react-bootstrap.github.io/components/carousel/
// https://ithelp.ithome.com.tw/articles/10227641

const ArticleIndex = () => {

  
  return (
    <>
<div className="index">
<Nav />
<ArticleCarousel />
        {/* 右邊svg開始 */}
        <div className="bg-icon-1">
            <img src="./bg-svg/Group 965.svg" alt="" />
          </div>
        {/*右邊svg結束 */}
        {/* 第二頁最新文章區塊開始 */}
        <div className="container">
          <div className="new">
            <h3>- 最新文章 -</h3>
            <div className="line">
            <img src="./bg-svg/Path 549.svg" alt="" />
          </div>
            <small>我必須真正享受生命中的美好事物，因為這讓其他的不美好顯得無關緊要。</small>
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
          <div className="card-columns">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title that wraps to a new line</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.</p>
              </div>
            </div>
            <div className="card p-3">
              <blockquote className="blockquote mb-0 card-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </blockquote>
            </div>
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional
                  content.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div className="card bg-primary text-white text-center p-3">
              <blockquote className="blockquote mb-0">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                <footer className="blockquote-footer text-white">
                  <small>
                    Someone famous in <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </blockquote>
            </div>
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This card has a regular title and short paragraphy of text below it.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
            </div>
            <div className="card p-3 text-right">
              <blockquote className="blockquote mb-0">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </blockquote>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is another card with title and supporting text below. This card has
                  some additional content to make it slightly taller overall.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
          <div className="more">
            <img src="./bg-svg/more-for-category.svg" alt="" />
          </div>
        </div>
      </div>

    </>
  )
}

export default ArticleIndex