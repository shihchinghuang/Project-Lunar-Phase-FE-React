import React from "react";
import "react-bootstrap";

function TodoAddForm(props) {
  const { todoInput, setTodoInput, handleAddNew } = props;

  return (
    <>
      <div className="publisher w-25 d-flex">
        <img
          src="http://localhost:3000/img/Article/Maruko.jpeg"
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
