import React, { useState, useEffect } from "react";
// Styles
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { withRouter } from "react-router-dom";

function User(props) {
  const [article, setArticle] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
  const [displayArticle, setDisplayArticle] = useState([]); //篩過之後的資料
  var moment = require("moment");

  async function getArticleFromServer() {
    // 開啟載入指示
    setDataLoading(true);

    // 連接的伺服器資料網址
    const url = `http://localhost:6005/article?orderBy=created_at-desc`;

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
    setArticle(data.data);
    setDisplayArticle(data.data);
  }

  async function deleteArticleFromServer(id) {
    // 開啟載入指示
    setDataLoading(true);

    // 連接的伺服器資料網址
    const url = "http://localhost:6005/article/" + id;

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: "DELETE",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });

    const response = await fetch(request);
    const data = await response.json();
    console.log(data);

    // 設定資料
    if (!data.id) {
      const newArticle = article.filter((value, index) => {
        return value.id !== id;
      });

      setArticle(newArticle);
      alert("刪除完成");
    }
  }

  // 一開始就會開始載入資料
  useEffect(() => {
    getArticleFromServer();
  }, []);

  // 每次users資料有變動就會X秒後關掉載入指示
  useEffect(() => {
    setTimeout(() => {
      setDataLoading(false);
    }, 1000);
  }, []);

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
      <Card className="m-3">
        <a
          href="http://localhost:3000/articledetail/2"
          style={{ textDecoration: "none" }}
        >
          <Card.Img
            className="w-100 "
            style={{ height: "200px", objectFit: "cover" }}
            // src={article.articleImg}
            src="https://c1.staticflickr.com/5/4183/34238230142_a2a6fdb581_b.jpg"
          />
          <Card.Body>
            <Card.Title className="text-left text-body">
              第一次使用棉條就上手！寫給妳的全方位使用教學指南
              {/* {article.articleName} */}
            </Card.Title>
            <div className="d-flex justify-content-between pt-4 text-body">
              <Card.Text>Audrey Ko</Card.Text>
              <Card.Text>2021-07-08</Card.Text>
            </div>
          </Card.Body>
        </a>
      </Card>
      {displayArticle.map((v, i) => {
        return (
          <Card className="m-3">
            <a
              href={`http://localhost:3000/articledetail/${v.id}`}
              style={{ textDecoration: "none" }}
            >
              <Card.Img
                className="w-100 "
                style={{ height: "200px", objectFit: "cover" }}
                src={v.articleImg}
                // src="https://c1.staticflickr.com/5/4183/34238230142_a2a6fdb581_b.jpg"
              />
              <Card.Body>
                <Card.Title className="text-left text-body">
                  {/* 第一次使用棉條就上手！寫給妳的全方位使用教學指南 */}
                  {v.articleName}
                </Card.Title>
                <div className="d-flex justify-content-between pt-4 text-body">
                  <Card.Text>{v.articleAuthor}</Card.Text>
                  <Card.Text>
                    {moment(v.created_at).format("YYYY-MM-DD")}
                  </Card.Text>
                </div>
              </Card.Body>
            </a>
          </Card>
        );
      })}
    </>
  );
}

export default User;
