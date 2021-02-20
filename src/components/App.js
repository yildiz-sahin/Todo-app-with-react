import React, { useState } from 'react';
import  TodoList from './TodoList';
import TodoInput from './TodoInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import {v4} from 'uuid';


const App = (props) => {
  const [items, setItems] = useState({
    itemList: [],
    id: v4(),
    item: "",
    editItem: false
  });

  const handleChange = e => {
    setItems(
      {...items, item: e.target.value} // e.target.value
    )
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: items.id,
      item: items.item
    }
    
    if (newItem.item) {
      const updatedItem = [...items.itemList, newItem]

      setItems({
        itemList: updatedItem,
        id: v4(),
        item: "",
        editItem: false
      })
    }
  }

  const handleDelete = (e) => {
    e.preventDefault();
    setItems({
        itemList: [],
        id: v4(),
        item: "",
        editItem: false
    })
  }

  const handleSingleItemDelete = (id) => {
    const filteredItems = items.itemList.filter(item =>
      item.id !== id
    );
    
    setItems({
      itemList: filteredItems,
      id: v4(),
      item: "",
      editItem: false
    })
  }

  const handleEdit = (id) => {
    const filteredItems = items.itemList.filter(item =>
      item.id !== id
    );
    
    const editedItem = items.itemList.filter(item => item.id === id);
    const editedItemTitle = editedItem[0].item;
    
    setItems({
      itemList: filteredItems,
      id: id,
      item: editedItemTitle,
      editItem: true
    })
  }


  return ( 
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 mt-4">
          <h3 className="text-capitalize text-center">
            to-do list
          </h3>
          
          <TodoInput 
          item={items.item}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          editItem={items.editItem}
          />
          <TodoList 
          itemList={items.itemList} 
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleSingleItemDelete={handleSingleItemDelete}
          />
        </div>
      </div>
    </div>
  );
} 

export default App;
