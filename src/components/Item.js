import React from "react";

const Item = ({id, dateS, dateE, note, deleteData,submittingStatus }) => {



function deleteItem(){
    submittingStatus.current=true
    deleteData(function (prev) {
    return prev.filter(item=>item.id !== id)

})
}

  return (
    <>
      <div className="item">
        <div>
          <p>開始時間：{dateS}</p>
          <p>結束時間：{dateE}</p>
          <p>症狀或其他紀錄：{note}</p>
        </div>
        <button onClick={deleteItem} className="remove">刪除</button>
      </div>
    </>
  );
};

export default Item;
