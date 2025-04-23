const ColorProduct = () => {
  return (
    <div className="flex gap-1">
      <label htmlFor="color">COLOR: </label>
      <select id="color">
        <option>Red</option>
        <option>Green</option>
        <option>Blue</option>
      </select>
    </div>
  );
};
export default ColorProduct;
