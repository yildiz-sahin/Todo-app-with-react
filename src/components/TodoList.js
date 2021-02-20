import React from 'react';
import TodoItem from './TodoItem';



const TodoList = (props) => {
  const {itemList, handleDelete, handleSingleItemDelete, handleEdit} = props;

  return (
    <ul className="list-group my-5">
      <h3 className="text-capitalize text-center">
        Todo List
      </h3>
      {
        itemList.map (singleItem => {
          return <TodoItem 
                  key={singleItem.id} 
                  title={singleItem.item}
                  handleSingleItemDelete={() => handleSingleItemDelete(singleItem.id)}
                  handleEdit={() => handleEdit(singleItem.id)}
                  />
        })
      }
      
      <button 
      type="button" 
      className="btn text-capitalize btn-danger mt-5"
      onClick={handleDelete}
      >Delete everything
      </button>
    </ul>
  );
}

export default TodoList;
