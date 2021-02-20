import React, { useContext } from 'react';


const TodoItem = (props) => {
  return (
    <li className="list-group-ite text-capitalize d-flex justify-content-between my-1">
      <h6>{props.title}</h6>
      <div>
        <span className="text-success mx-2" onClick={props.handleEdit}>
          <i className="bi bi-pencil-fill" />
        </span>

        <span className="text-danger mx-2" onClick={props.handleSingleItemDelete}>
          <i className="bi bi-trash-fill" ></i>
        </span>
        
        
      </div>
    </li>
  );
}

export default TodoItem;
