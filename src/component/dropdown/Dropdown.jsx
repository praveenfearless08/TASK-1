const Dropdown = ({ options, onSelectChange, selectedItem }) => {
  return (
    <select
      name="currency"
      id="currency"
      value={selectedItem}
      onChange={(e) => onSelectChange(e.target.value)}
    >
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
