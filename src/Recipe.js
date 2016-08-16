import React from 'react';

export default (props) => {
  return (
    <li>
      <h4>{props.recipe}</h4>
      <div classname="detail-view">
        <button className="btn btn-edit">edit</button>
        <button className="btn btn-delete">delete</button>
      </div>
    </li>
  );
}
