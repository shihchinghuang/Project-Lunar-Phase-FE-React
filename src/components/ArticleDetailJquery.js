// import React,{ useState, useEffect, useRef} from 'react'
// // import './articleDetail.scss'
// import $ from 'jquery'


// function ArticleDetailJquery() {

//   const [data, setData] = useState(123)
//   const [didMount, setDidMount] = useState(false)
  
//   // const buttonRef = useRef()

//   // componentDidMount
//   useEffect(() => {

//     $(".jq-large").on('click', () => {
//       // event.preventDefault(); //取消預設行為
//       $("p").css("font-size", "20px").css("line-height", "40px");
//   });

//   $(".jq-medium").on('click', () => {
//       // event.preventDefault(); //取消預設行為
//       $("p").css("font-size", "18px");
//   });

//   $(".jq-small").on('click', () => {
//       // event.preventDefault(); //取消預設行為
//       $("p").css("font-size", "16px");
//   });

//   setDidMount(true)

//   },[])

// // componentDidUpdate
// useEffect(() => {
//   // 第一次不執行
//   if (!didMount) return

//   // jquery程式碼寫在這裡, 確保dom已經出現在網頁
//   // 使用id
//   // 移除事件監聽
//   $(".jq-large").off('click')
//   $(".jq-medium").off('click')
//   $(".jq-small ").off('click')

//   // 加入新的事件監聽
//   $(".jq-large").on('click', () => {
//     // event.preventDefault(); //取消預設行為
//     $("p").css("font-size", "20px").css("line-height", "40px");
// });

// $(".jq-medium").on('click', () => {
//     // event.preventDefault(); //取消預設行為
//     $("p").css("font-size", "18px");
// });

// $(".jq-small").on('click', () => {
//     // event.preventDefault(); //取消預設行為
//     $("p").css("font-size", "16px");
// });

  
// }, [data, didMount])


//   return (
//     <>
// <button class="font jq-large">大</button>
//             <button class="font jq-medium">中</button>
//             <button class="font jq-small">小</button>
//     </>
//   )
//   }

// export default ArticleDetailJquery


