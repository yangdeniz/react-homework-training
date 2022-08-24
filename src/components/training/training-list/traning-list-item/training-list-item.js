import React from 'react';
import './training-list-item.css';

function TrainingListItem(props) {
  return (
    <li className='training-list__item'>
      <div>{props.date}</div>
      <div>{props.distance}</div>
      <div className='training-list__actions'>
        <span onClick={props.onEdit}>✎</span>
        <span onClick={props.onRemove}>✘</span>
      </div>
    </li>
  );
}

export default TrainingListItem;