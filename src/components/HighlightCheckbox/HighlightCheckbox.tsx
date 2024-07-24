// import React from 'react';

// interface HighlightCheckboxProps {
//   onToggleHighlight: (highlight: boolean) => void;
// }

// const HighlightCheckbox: React.FC<HighlightCheckboxProps> = ({ onToggleHighlight }) => {
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     onToggleHighlight(e.target.checked);
//   };

//   return (
//     <label>
//       <input type="checkbox" onChange={handleChange} />
//       Highlight oldest per city
//     </label>
//   );
// };

// export default HighlightCheckbox;


import React from 'react';

interface HighlightCheckboxProps {
  onToggleHighlight: (highlight: boolean) => void;
  id: string;
}

const HighlightCheckbox: React.FC<HighlightCheckboxProps> = ({ onToggleHighlight, id }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onToggleHighlight(event.target.checked);
  };

  return (
    <input
      type="checkbox"
      id={id}
      onChange={handleChange}
    />
  );
};

export default HighlightCheckbox;


