const Select = ({ model, options }) => (
  <div className="col-4">
    <select
      value={model.sort}
      onChange={model.handleInputEvent}
      className="form-select col-4"
    >
      {Object.values(options).map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  </div>
)

export default Select
