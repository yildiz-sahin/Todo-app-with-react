import React from 'react';


const TodoInput= (props) => {

  return (
    <div className="card card-body my-3">
      <form onSubmit={props.handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white">
              <i className="bi bi-journal-bookmark-fill"></i>
            </div>
          </div>
          <input type="text" 
          className="form-control" 
          placeholder="Add something to your list..."
          value = {props.item}
          onChange={props.handleChange}/>
        </div>
        <button type="submit" 
        className=
        {props.editItem ? "btn btn-block btn-success mt-4": "btn btn-block btn-primary mt-4"}
        >
        {props.editItem ? "Edit" : "Add"}
        </button>
      </form>
    </div>
  );
}

export default TodoInput;
