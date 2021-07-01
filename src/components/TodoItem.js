import React from 'react'
import 'react-bootstrap'

function TodoItem(props) {
  const {
    todoItem,
    // 打勾的部分
    // handleCompleted,
    handleDelete,
    handleEdited,
  } = props

  return (
    <>
      
      <div className="publisher w-25 d-flex pb-4">
    <img src="https://scontent.ftpe3-2.fna.fbcdn.net/v/t1.6435-9/103604234_104614427967196_8097283742219306750_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=rBIEGAa6HFcAX_AX32R&_nc_ht=scontent.ftpe3-2.fna&oh=8bf4dfe003dbb5dfacc392496e5d20f7&oe=60E211F7" className="w-25 rounded-circle" alt="avator" />
    <div className="ml-4 my-auto text-left">
    <p className="mb-0">用戶A</p>
    <small>2021-06-21</small>
    </div>
    </div>
    <div className="d-flex justify-content-between border-bottom pb-5 mb-5">
      <div className="my-auto ">
      <li className="pl-5 ml-5">
      {/* 打勾的部分 */}
        {/* <input
          type="checkbox"
          checked={todoItem.completed}
          onChange={() => {
            handleCompleted(todoItem.id)
          }}
        /> */}
        {todoItem.completed ? (
          <del>{todoItem.text}</del>
        ) : (
          todoItem.text
        )}
        </li>
      </div>
        <div className="my-auto">
        <button
          className="btn btn-primary mr-3"
          onClick={() => {
            handleEdited(todoItem.id)
          }}
        >
          編輯
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            handleDelete(todoItem.id)
          }}
        >
          刪除
        </button>
        </div>
      </div>
      
    </>
  )
}

export default TodoItem