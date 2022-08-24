import React, { useState } from 'react';
import TrainingInput from './training-input/training-input';
import TrainingList from './training-list/training-list';

function Training() {
  const [items, setItems] = useState([]);
  const [date, setDate] = useState('');
  const [distance, setDistance] = useState('');
  
  const addItem = (item) => {
    if (!item.date || !item.distance) {
      return;
    }
    setItems(prev => prev.some(x => x.date === item.date)
      ? prev.map(x => x.date === item.date ? { ...x, distance: +x.distance + +item.distance } : x)
      : [...prev, item]);
  }

  const removeItem = (item) => {
    setItems(prev => prev.filter(x => x.date !== item.date));
  }

  const editItem = (item) => {
    removeItem(item);
    setDate(item.date);
    setDistance(item.distance);
  }

  return (
    <>
      <TrainingInput 
        date={date} distance={distance} 
        onAdd={addItem} 
        onDateChanged={value => setDate(value)} 
        onDistanceChanged={value => setDistance(value)} 
      />
      <TrainingList 
        items={items} 
        onRemove={removeItem} 
        onEdit={editItem} 
      />
    </>
  );
}

export default Training;