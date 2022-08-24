import React from 'react';
import TrainingListItem from './traning-list-item/training-list-item';
import './training-list.css';

function TrainingList(props) {
  const { items } = props;
  items.sort((a, b) => new Date(b.date) - new Date(a.date));
  return (
    <>
      <div className='training-list__header'>
        <div>Дата (ДД.ММ.ГГ)</div>
        <div>Пройдено км</div>
        <div>Действия</div>
      </div>
      <ul className='training-list'>
        {items.map(item => (
          <TrainingListItem 
            key={item.date} 
            date={item.date} 
            distance={item.distance}
            onEdit={() => props.onEdit(item)}
            onRemove={() => props.onRemove(item)}
          />
        ))}
      </ul>
    </>
  );
}

export default TrainingList;