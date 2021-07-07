import React from "react";
import { CardDeck, Card } from "react-bootstrap";

const ArticleCard = () => {
  return (
    <>
      <CardDeck className="container m-auto">
        <Card className="col-4">
          <a
            href="http://localhost:3000/article/35"
            style={{ textDecoration: "none" }}
          >
            <Card.Img
              className="w-100 mt-3"
              style={{ height: "170px", objectFit: "cover" }}
              src="https://image1.thenewslens.com/2020/11/7l6wfj58259t97nyo418ydjummny89.jpg"
            />
            <Card.Body>
              <Card.Title className="text-left text-body">
                第一次使用棉條就上手！寫給妳的全方位使用教學指南
              </Card.Title>
              <div className="d-flex justify-content-between pt-4 text-body">
                <Card.Text>Audrey Ko</Card.Text>
                <Card.Text>2021-02-03</Card.Text>
              </div>
            </Card.Body>
          </a>
        </Card>

        <Card className="col-4">
          <a
            href="http://localhost:3000/article/24"
            style={{ textDecoration: "none" }}
          >
            <Card.Img
              className="w-100 mt-3"
              style={{ height: "170px", objectFit: "cover" }}
              src="https://castle.womany.net/images/content/pictures/33702/womany_mooncup_1441783172-29443-5169.jpg"
            />
            <Card.Body>
              <Card.Title className="text-left text-body">
                給你的寵愛身體懶人包：第一次月亮杯就上手
              </Card.Title>
              <div className="d-flex justify-content-between pt-4 text-body">
                <Card.Text>慢慢說</Card.Text>
                <Card.Text>2021-06-14</Card.Text>
              </div>
            </Card.Body>
            {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
          </a>
        </Card>

        <Card className="col-4">
          <a
            href="http://localhost:3000/article/28"
            style={{ textDecoration: "none" }}
          >
            <Card.Img
              className="w-100  mt-3"
              style={{ height: "170px", objectFit: "cover" }}
              src="https://pbs.twimg.com/media/EnoBjg2W8AU_U47?format=jpg&name=large"
            />
            <Card.Body>
              <Card.Title className="text-left text-body">
                讓「月經貧窮」走入歷史，蘇格蘭議會獨步全球通過「生理用品免費法案」
              </Card.Title>
              <div className="d-flex justify-content-between text-body">
                <Card.Text>中央社</Card.Text>
                <Card.Text>2021-05-13</Card.Text>
              </div>
            </Card.Body>
            {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
          </a>
        </Card>
      </CardDeck>
    </>
  );
};
export default ArticleCard;

// <div className="card">
// <img src="./img/t1xuywcar96sxqjympzodashc5g96t.jpeg" className="card-img-top" alt="..." />
// <div className="card-body">
//   <h5 className=" card-title"></h5>
//   <div className="author-date-index d-flex">
//     <small className="text-muted ">團隊</small>
//     <small className="text-muted">2021-04-23</small>
//   </div>
// </div>
// </div>
// <div className="card">
