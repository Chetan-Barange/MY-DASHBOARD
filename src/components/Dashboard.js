import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Widget from './Widget';
import AddWidget from './AddWidget';
import SearchBar from './SearchBar';

function Dashboard() {
  const categories = useSelector((state) => state.dashboard.categories);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = categories.map((category) => ({
    ...category,
    widgets: category.widgets.filter((widget) =>
      widget.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <div className="dashboard">
      <SearchBar setSearchTerm={setSearchTerm} />
      {filteredCategories.map((category) => (
        <div key={category.name} className="category">
          <h2>{category.name}</h2>
          {category.widgets.map((widget) => (
            <Widget key={widget.id} widget={widget} category={category.name} />
          ))}
          <AddWidget categoryName={category.name} />
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
