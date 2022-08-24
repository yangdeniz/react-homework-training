import React from 'react';
import './training-input.css';

function TrainingInput(props) {
  const { date, distance } = props;
  return (
    <div className='training-form'>
      <div className='training-form__input'>
        <label htmlFor='training-input-date'>Дата (ДД.ММ.ГГ)</label>
        <input id='training-input-date' type='date' value={date} onChange={e => props.onDateChanged(e.target.value)} />
      </div>
      <div className='training-form__input'>
        <label htmlFor='training-input-distance'>Пройдено км</label>
        <input id='training-input-distance' type='number' min='0' value={distance} onChange={e => props.onDistanceChanged(e.target.value)} />
      </div>
      <div>
        <button className='training-form__btn' onClick={() => props.onAdd({ date: date, distance: distance })}>OK</button>
      </div>
    </div>
  );
}

export default TrainingInput;