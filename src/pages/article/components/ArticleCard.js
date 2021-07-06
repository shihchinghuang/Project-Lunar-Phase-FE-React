import React from "react";
import { CardDeck, Card } from "react-bootstrap";

const ArticleCard = () => {
  return (
    <>
      <CardDeck className="container m-auto">
        <Card>
          <Card.Img
            className="w-100"
            src="http://localhost:3000/img/Article/gmnmma8s7qsygbr4wx7h4h47dqnc25.jpeg"
          />
          <Card.Body>
            <Card.Title className="text-left">
              染了經血的內褲廣告文案，折射出一片情感與身體教育的枯燥沙漠
            </Card.Title>
            <div className="d-flex justify-content-between pt-4">
              <Card.Text>團隊</Card.Text>
              <Card.Text>2021-02-03</Card.Text>
            </div>
          </Card.Body>
          {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
        </Card>

        <Card>
          <Card.Img
            className="w-100"
            src="http://localhost:3000/img/Article/gmnmma8s7qsygbr4wx7h4h47dqnc25.jpeg"
          />
          <Card.Body>
            <Card.Title className="text-left">
              染了經血的內褲廣告文案，折射出一片情感與身體教育的枯燥沙漠
            </Card.Title>
            <div className="d-flex justify-content-between pt-4">
              <Card.Text>團隊</Card.Text>
              <Card.Text>2021-02-03</Card.Text>
            </div>
          </Card.Body>
          {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
        </Card>

        <Card>
          <Card.Img
            className="w-100"
            src="http://localhost:3000/img/Article/gmnmma8s7qsygbr4wx7h4h47dqnc25.jpeg"
          />
          <Card.Body>
            <Card.Title className="text-left">
              染了經血的內褲廣告文案，折射出一片情感與身體教育的枯燥沙漠
            </Card.Title>
            <div className="d-flex justify-content-between pt-4">
              <Card.Text>團隊</Card.Text>
              <Card.Text>2021-02-03</Card.Text>
            </div>
          </Card.Body>
          {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
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
