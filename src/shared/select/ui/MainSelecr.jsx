import { useState } from "react";

function MainSelect({
  title,
  list,
  handleChange,
  defaultValue,
  reset = false,
  size = "small",
}) {
  const [state, setState] = useState(defaultValue);

  const onChange = (event) => {
    setState(event.target.value);
    handleChange(event.target.value);
    if (reset) {
      setState(defaultValue);
    }
  };
  return (
    <div>
      {title.length > 0 ? (
        <label htmlFor="demo-simple-select-helper" className="form-label">
          {title}
        </label>
      ) : null}

      <select
        id="demo-simple-select-helper"
        className="form-select"
        value={state}
        onChange={onChange}
        size={size}
      >
        {list.map((item, index) => (
          <option key={index} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default MainSelect;
