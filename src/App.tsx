import React, { useState } from 'react';
import SearchInput from './components/SearchInput/SearchInput';
import CityDropdown from './components/CityDropdown/CityDropdown';
import HighlightCheckbox from './components/HighlightCheckbox/HighlightCheckbox';
import useFetchUsers from './hooks/useFetchUsers';
import { filterUsers } from './utils/filterUsers';
import './App.css';

const App: React.FC = () => {
  const { users, loading } = useFetchUsers();
  const [query, setQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [highlightOldest, setHighlightOldest] = useState(false);

  const cities = [...new Set(users.map((user) => user.address.city))];
  const filteredUsers = filterUsers(users, query, selectedCity, highlightOldest);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app-container">
      <div className="container">
        <h1>User List</h1>
        <div className="filters">
          <div className="filter-item">
            <SearchInput onSearch={setQuery} />
          </div>
          <div className="filter-item">
            <CityDropdown cities={cities} onSelectCity={setSelectedCity} />
          </div>
          <div className="highlight-container">
            <label htmlFor="highlight-checkbox">Highlight oldest per city</label>
            <HighlightCheckbox onToggleHighlight={setHighlightOldest} id="highlight-checkbox" />
          </div>
        </div>
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>City</th>
              <th>Birthday</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr
                key={user.id}
                className={user.isHighlighted ? 'highlighted' : ''}
              >
                <td>{user.firstName} {user.lastName}</td>
                <td>{user.address.city}</td>
                <td>{new Date(user.birthDate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
