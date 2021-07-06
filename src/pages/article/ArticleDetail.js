import React, { useState, useEffect } from "react";
import "./articleDetail.scss";
// import $ from 'jquery'
// import ArticleDetailJquery from '.../components/ArticleDetailJquery.js'
import TodoApp from "./components/TodoApp.js";
import ArticleCard from "./components/ArticleCard.js";
import ArticleDetailJquery from "./components/ArticleDetailJquery.js";
import ProgressBar from "react-scroll-progress-bar";
// https://www.npmjs.com/package/react-scroll-progress-bar
import { RiBookmarkFill } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";
import axios from "axios";
// import Navi from "./components/Navi.js";

import { withRouter } from "react-router-dom";

const ArticleDetail = (props) => {
  console.log(props);
  var moment = require("moment");

  const [article, setArticle] = useState([
    {
      // id: '',
      // eventId: '',
      // eventName: '',
      // eventSubtitle: '',
      // eventDate: '',
      // eventDescription: '',
      // eventLocation: '',
      // eventImg: '',
      // eventPrice: '0',
      // eventCategory: '',
      // created_at: '',
      // updated_at: '',
    },
  ]);

  const [dataLoading, setDataLoading] = useState(false);

  async function getArticleFromServer() {
    // 開啟載入指示
    // setDataLoading(true)

    // 連接的伺服器資料網址
    const id = props.match.params.id;
    const url = "http://localhost:6005/article/" + id;
    // const url = 'http://localhost:6005/event/:id?'

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });
    const response = await fetch(request);
    const data = await response.json();
    console.log(data);
    // 設定資料
    setArticle(data);
    console.log();
  }
  useEffect(() => {
    getArticleFromServer();
    // const newevent = event.find((v, i) => {
    //   return props.match.params.id === v.id
    // })
    // setEvent(newevent)
  }, []);

  // 每次users資料有變動就會X秒後關掉載入指示
  useEffect(() => {
    setTimeout(() => {
      setDataLoading(false);
    }, 1000);
  }, [article]);

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
  return (
    <>
      {/* <Navi /> */}
      <div>
        <ProgressBar height="15px" bgcolor="#FDD2BB" />
        {/* <div className="wrap"> 
          <div className="box" />
        </div> */}
        <div className="container">
          <img src="./img/Image 17.png" className="w-100" alt="" />
          <div className="title">
            <h3>{article.articleName}</h3>
            <img src="./bg-svg/Path 534.svg" alt="" />
            <div className="author-date">
              <p className="m-0">{article.articleAuthor}</p>
              <small className="m-0">
                {moment(article.articleDate).format("YYYY-MM-DD")}
              </small>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="ml-4">
              <ArticleDetailJquery />
            </div>
            <div className="mr-4">
              <RiBookmarkFill className="h4 mr-4" />
              <TiSocialFacebook className="h3 mr-4" />
              <AiOutlineInstagram className="h3 mr-4" />
            </div>
          </div>
          <div className="content">
            <img src="./bg-svg/Group 1120.png" alt="" />
            <p>{article.articleContent0}</p>
          </div>
        </div>
        <div className="article-recommand container mb-5">
          <div className="container d-flex justify-content-between align-items-center border-bottom border-dark mb-5">
            <div>
              <h3>相關文章</h3>
            </div>

            <div>
              <p className="btn-more mt-3 mx-auto" href="#">
                more
              </p>
            </div>
          </div>
          <ArticleCard />
        </div>
      </div>

      <div className="container">
        <TodoApp />
      </div>
    </>
  );
};

export default withRouter(ArticleDetail);

// const sessionServer = async () => {
//   const url = `http://localhost:6005/article`;
//   const request = new Request(url, {
//     method: "GET",
//     credentials: "include",
//     headers: new Headers({
//       Accept: "application/json",
//     }),
//   });
//   const response = await fetch(request);
//   const data = await response.json();
//   console.log("data", data);
//   setGetSession(data);
// };

// const ArticleDetail = (prop) => {
//   const [article, setArticle] = useState([]);
//   const [id, setId] = useState(2);
//   const [dataLoading, setDataLoading] = useState(false);
//   var moment = require("moment");

//   async function getArticleFromServer(id) {
//     // 開啟載入指示
//     setDataLoading(true);

//     // 連接的伺服器資料網址
//     const url = "http://localhost:6005/article/" + id;

//     // 注意header資料格式要設定，伺服器才知道是json格式
//     const request = new Request(url, {
//       method: "GET",
//       headers: new Headers({
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       }),
//     });

//     const response = await fetch(request);
//     const data = await response.json();

//     console.log(data);
//     // 設定資料
//     setArticle(data);
//   }
//   useEffect(() => {
//     getArticleFromServer();
//   }, []);

//   // 每次users資料有變動就會X秒後關掉載入指示
//   useEffect(() => {
//     setTimeout(() => {
//       setDataLoading(false);
//     }, 1000);
//   }, [article]);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:6005/article/${id}`)
//       .then((res) => {
//         console.log(res);
//         setArticle(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <>
//       {article?.data?.map((v, i) => {
//         return (
//           <>
//             {/* <Navi /> */}
//             <div>
//               <ProgressBar height="15px" bgcolor="#FDD2BB" />
//               {/* <div className="wrap">
//           <div className="box" />
//         </div> */}
//               <div className="container">
//                 <img src="./img/Image 17.png" className="w-100" alt="" />
//                 <div className="title">
//                   <h3>{v.articleName}</h3>
//                   <img src="./bg-svg/Path 534.svg" alt="" />
//                   <div className="author-date">
//                     <p className="m-0">{v.articleAuthor}</p>
//                     <small className="m-0">
//                       {moment(v.articleDate).format("YYYY-MM-DD")}
//                     </small>
//                   </div>
//                 </div>
//               </div>
//               <div className="container">
//                 <div className="d-flex justify-content-between">
//                   <div className="ml-4">
//                     <ArticleDetailJquery />
//                   </div>
//                   <div className="mr-4">
//                     <RiBookmarkFill className="h4 mr-4" />
//                     <TiSocialFacebook className="h3 mr-4" />
//                     <AiOutlineInstagram className="h3 mr-4" />
//                   </div>
//                 </div>
//                 <div className="content">
//                   <img src="./bg-svg/Group 1120.png" alt="" />
//                   <p>{v.articleContent}</p>
//                 </div>
//               </div>
//               <div className="article-recommand container mb-5">
//                 <div className="container d-flex justify-content-between align-items-center border-bottom border-dark mb-5">
//                   <div>
//                     <h3>相關文章</h3>
//                   </div>

//                   <div>
//                     <p className="btn-more mt-3 mx-auto" href="#">
//                       more
//                     </p>
//                   </div>
//                 </div>
//                 <ArticleCard />
//               </div>
//             </div>

//             <div className="container">
//               <TodoApp />
//             </div>
//           </>
//         );
//       })}
//     </>
//   );
// };

// export default ArticleDetail;
