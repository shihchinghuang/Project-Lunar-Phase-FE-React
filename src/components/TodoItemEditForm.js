import React, { useState } from 'react'

function TodoItemEditForm(props) {
  const { handleEdited, todoItem, handleEditedSave } = props

  // 用傳入props中的todoItem.text當初始化值
  const [input, setInput] = useState(todoItem.text)

  return (
    <>
    <div className="publisher w-25 d-flex pb-4">
    <img src="https://scontent.ftpe3-2.fna.fbcdn.net/v/t1.6435-9/103604234_104614427967196_8097283742219306750_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=rBIEGAa6HFcAX_AX32R&_nc_ht=scontent.ftpe3-2.fna&oh=8bf4dfe003dbb5dfacc392496e5d20f7&oe=60E211F7" className="w-25 rounded-circle" alt="avator" />
    <div className="ml-4 my-auto text-left">
    <p className="mb-0">用戶A</p>
    <small>2021-06-21</small>
    </div>
    </div>
      <li>
        <input
          className="form-control"
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
          }}
          autoFocus
        />
        <button
          className="btn btn-success  mr-3 mt-3"
          onClick={() => {
            // 兩個傳入參數，第一個是要修改的項目id，第二個是修改的新文字字串
            handleEditedSave(todoItem.id, input)
          }}
        >
          儲存
        </button>
        <button
          className="btn btn-danger mt-3"
          onClick={() => {
            handleEdited(todoItem.id)
          }}
        >
          取消
        </button>
      </li>
    </>
  )
}

export default TodoItemEditForm