import React, { useEffect } from 'react';

interface CityDropdownProps {
  cities: string[];
  onSelectCity: (city: string) => void;
}

const CityDropdown: React.FC<CityDropdownProps> = ({ cities, onSelectCity }) => {
  return (
    <select onChange={(e) => onSelectCity(e.target.value)}>
      <option value="">Select city</option>
      {cities.map((city, index) => (
        <option key={index} value={city}>
          {city}
        </option>
      ))}
    </select>
  );
};

export default CityDropdown;
