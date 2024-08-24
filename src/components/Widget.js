import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../store/dashboardSlice';

function Widget({ widget, category }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeWidget({ categoryName: category, widgetId: widget.id }));
  };

  return (
    <div className="widget">
      <h3>{widget.name}</h3>
      <p>{widget.text}</p>
      <button onClick={handleRemove}>X</button>
    </div>
  );
}

export default Widget;
