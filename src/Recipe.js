import React from 'react';


export default (props) => {


  return (

    <li
      className={props.selected ? 'recipe selected': 'recipe'}

      onClick={() =>  props.onToggle(props.num)}
    >
      <h4>{props.recipe}</h4>
      <div className="detail-view">
        <button className="btn btn-edit">edit</button>
        <button className="btn btn-delete">delete</button>
      </div>
    </li>
    );
}
