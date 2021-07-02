import React from "react";
import "react-bootstrap";

function TodoAddForm(props) {
  const { todoInput, setTodoInput, handleAddNew } = props;

  return (
    <>
      <div className="publisher w-25 d-flex">
        <img
          src="https://scontent.ftpe3-2.fna.fbcdn.net/v/t1.6435-9/103604234_104614427967196_8097283742219306750_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=rBIEGAa6HFcAX_AX32R&_nc_ht=scontent.ftpe3-2.fna&oh=8bf4dfe003dbb5dfacc392496e5d20f7&oe=60E211F7"
          className="w-25 rounded-circle"
          alt="avator"
        />
        <p className="my-auto ml-4">用戶A</p>
      </div>
      <textarea
        className="form-control mt-3"
        rows="6"
        placeholder="在此輸入文字..."
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleAddNew(todoInput);
          }
        }}
      />
      <button
        onClick={() => {
          handleAddNew(todoInput);
        }}
        className="m-4 btn-soft-green-s"
      >
        我要留言
      </button>
    </>
  );
}

export default TodoAddForm;
