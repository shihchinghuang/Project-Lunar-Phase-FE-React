// import React from "react";
// import "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// const ArticleNewCard = () => {
//   return (
//     <>
//       <div className="container d-flex m-auto border-top border-dark">
//         <div className="col-6 border-right border-dark  mt-3">
//           <a
//             href="http://localhost:3000/articledetail/35"
//             style={{ textDecoration: "none", color: "black" }}
//           >
//             <img
//               className=" w-100 mb-3"
//               style={{ height: "230px", objectFit: "cover" }}
//               src="https://image1.thenewslens.com/2020/11/7l6wfj58259t97nyo418ydjummny89.jpg"
//               alt=""
//             />
//             <div className="title-wrap w-100">
//               <h5 className="mb-4">
//                 第一次使用棉條就上手！寫給妳的全方位使用教學指南
//               </h5>
//               <div className="d-flex justify-content-between w-100">
//                 <p>Audrey Ko</p>
//                 <p>2021-02-03</p>
//               </div>
//             </div>
//           </a>
//         </div>
//         <div className="col-6 border-right border-dark mt-3">
//           <a
//             href="http://localhost:3000/articledetail/24"
//             style={{ textDecoration: "none", color: "black" }}
//           >
//             <img
//               className=" w-100  mb-3"
//               style={{ height: "230px", objectFit: "cover" }}
//               src="https://castle.womany.net/images/content/pictures/33702/womany_mooncup_1441783172-29443-5169.jpg"
//               alt=""
//             />
//             <div className="title-wrap w-100">
//               <h5 className="mb-4">給你的寵愛身體懶人包：第一次月亮杯就上手</h5>
//               <div className="d-flex justify-content-between mb-0 w-100">
//                 <p>慢慢說</p>
//                 <p>2021-02-03</p>
//               </div>
//             </div>
//           </a>
//         </div>
//       </div>
//       {/* <CardDeck className="container ">
//         <Card className="col-5 ml-auto">
//           <a
//             href="http://localhost:3000/articledetail/35"
//             style={{ textDecoration: "none" }}
//           >
//             <Card.Img
//               className="w-100 mt-3"
//               style={{ height: "170px", objectFit: "cover" }}
//               src="https://image1.thenewslens.com/2020/11/7l6wfj58259t97nyo418ydjummny89.jpg"
//             />
//             <Card.Body>
//               <Card.Title className="text-left text-body">
//                 第一次使用棉條就上手！寫給妳的全方位使用教學指南
//               </Card.Title>
//               <div className="d-flex justify-content-between pt-4 text-body">
//                 <Card.Text>Audrey Ko</Card.Text>
//                 <Card.Text>2021-02-03</Card.Text>
//               </div>
//             </Card.Body>
//           </a>
//         </Card>

//         <Card className="col-5">
//           <a
//             href="http://localhost:3000/articledetail/24"
//             style={{ textDecoration: "none" }}
//           >
//             <Card.Img
//               className="w-100 mt-3"
//               style={{ height: "170px", objectFit: "cover" }}
//               src="https://castle.womany.net/images/content/pictures/33702/womany_mooncup_1441783172-29443-5169.jpg"
//             />
//             <Card.Body>
//               <Card.Title className="text-left text-body">
//                 給你的寵愛身體懶人包：第一次月亮杯就上手
//               </Card.Title>
//               <div className="d-flex justify-content-between pt-4 text-body">
//                 <Card.Text>慢慢說</Card.Text>
//                 <Card.Text>2021-06-14</Card.Text>
//               </div>
//             </Card.Body>

//           </a>
//         </Card>
//       </CardDeck>
//       <CardDeck className="container mt-4">
//         <Card className="col-5  ml-auto">
//           <a
//             href="http://localhost:3000/articledetail/35"
//             style={{ textDecoration: "none" }}
//           >
//             <Card.Img
//               className="w-100 mt-3"
//               style={{ height: "170px", objectFit: "cover" }}
//               src="https://image1.thenewslens.com/2020/11/7l6wfj58259t97nyo418ydjummny89.jpg"
//             />
//             <Card.Body>
//               <Card.Title className="text-left text-body">
//                 第一次使用棉條就上手！寫給妳的全方位使用教學指南
//               </Card.Title>
//               <div className="d-flex justify-content-between pt-4 text-body">
//                 <Card.Text>Audrey Ko</Card.Text>
//                 <Card.Text>2021-02-03</Card.Text>
//               </div>
//             </Card.Body>
//           </a>
//         </Card>

//         <Card className="col-5">
//           <a
//             href="http://localhost:3000/articledetail/24"
//             style={{ textDecoration: "none" }}
//           >
//             <Card.Img
//               className="w-100 mt-3"
//               style={{ height: "170px", objectFit: "cover" }}
//               src="https://castle.womany.net/images/content/pictures/33702/womany_mooncup_1441783172-29443-5169.jpg"
//             />
//             <Card.Body>
//               <Card.Title className="text-left text-body">
//                 給你的寵愛身體懶人包：第一次月亮杯就上手
//               </Card.Title>
//               <div className="d-flex justify-content-between pt-4 text-body">
//                 <Card.Text>慢慢說</Card.Text>
//                 <Card.Text>2021-06-14</Card.Text>
//               </div>
//             </Card.Body>

//           </a>
//         </Card>
//       </CardDeck>
//       <CardDeck className="container mt-4 cardeck">
//         <Card className="col-5  ml-auto">
//           <a
//             href="http://localhost:3000/articledetail/35"
//             style={{ textDecoration: "none" }}
//           >
//             <Card.Img
//               className="w-100 mt-3"
//               style={{ height: "170px", objectFit: "cover" }}
//               src="https://image1.thenewslens.com/2020/11/7l6wfj58259t97nyo418ydjummny89.jpg"
//             />
//             <Card.Body>
//               <Card.Title className="text-left text-body">
//                 第一次使用棉條就上手！寫給妳的全方位使用教學指南
//               </Card.Title>
//               <div className="d-flex justify-content-between pt-4 text-body">
//                 <Card.Text>Audrey Ko</Card.Text>
//                 <Card.Text>2021-02-03</Card.Text>
//               </div>
//             </Card.Body>
//           </a>
//         </Card>

//         <Card className="col-5">
//           <a
//             href="http://localhost:3000/articledetail/24"
//             style={{ textDecoration: "none" }}
//           >
//             <Card.Img
//               className="w-100 mt-3"
//               style={{ height: "170px", objectFit: "cover" }}
//               src="https://castle.womany.net/images/content/pictures/33702/womany_mooncup_1441783172-29443-5169.jpg"
//             />
//             <Card.Body>
//               <Card.Title className="text-left text-body">
//                 給你的寵愛身體懶人包：第一次月亮杯就上手
//               </Card.Title>
//               <div className="d-flex justify-content-between pt-4 text-body">
//                 <Card.Text>慢慢說</Card.Text>
//                 <Card.Text>2021-06-14</Card.Text>
//               </div>
//             </Card.Body>

//           </a>
//         </Card>
//       </CardDeck>
//       <CardDeck className="container mt-4 cardeck">
//         <Card className="col-5  ml-auto">
//           <a
//             href="http://localhost:3000/articledetail/35"
//             style={{ textDecoration: "none" }}
//           >
//             <Card.Img
//               className="w-100 mt-3"
//               style={{ height: "170px", objectFit: "cover" }}
//               src="https://image1.thenewslens.com/2020/11/7l6wfj58259t97nyo418ydjummny89.jpg"
//             />
//             <Card.Body>
//               <Card.Title className="text-left text-body">
//                 第一次使用棉條就上手！寫給妳的全方位使用教學指南
//               </Card.Title>
//               <div className="d-flex justify-content-between pt-4 text-body">
//                 <Card.Text>Audrey Ko</Card.Text>
//                 <Card.Text>2021-02-03</Card.Text>
//               </div>
//             </Card.Body>
//           </a>
//         </Card>

//         <Card className="col-5">
//           <a
//             href="http://localhost:3000/articledetail/24"
//             style={{ textDecoration: "none" }}
//           >
//             <Card.Img
//               className="w-100 mt-3"
//               style={{ height: "170px", objectFit: "cover" }}
//               src="https://castle.womany.net/images/content/pictures/33702/womany_mooncup_1441783172-29443-5169.jpg"
//             />
//             <Card.Body>
//               <Card.Title className="text-left text-body">
//                 給你的寵愛身體懶人包：第一次月亮杯就上手
//               </Card.Title>
//               <div className="d-flex justify-content-between pt-4 text-body">
//                 <Card.Text>慢慢說</Card.Text>
//                 <Card.Text>2021-06-14</Card.Text>
//               </div>
//             </Card.Body>

//           </a>
//         </Card>
//       </CardDeck> */}
//     </>
//   );
// };
// export default ArticleNewCard;

// // <div className="card">
// // <img src="./img/t1xuywcar96sxqjympzodashc5g96t.jpeg" className="card-img-top" alt="..." />
// // <div className="card-body">
// //   <h5 className=" card-title"></h5>
// //   <div className="author-date-index d-flex">
// //     <small className="text-muted ">團隊</small>
// //     <small className="text-muted">2021-04-23</small>
// //   </div>
// // </div>
// // </div>
// // <div className="card">
