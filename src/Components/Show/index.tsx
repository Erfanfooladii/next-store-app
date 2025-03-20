import useShowItem from "@/stores/showStore";

const ShowItem = () => {
  const { setShowItem } = useShowItem();
  return (
    <div className="bg-orange-400 p-1 rounded shadow">
      <select
        onChange={(e) => setShowItem(e.target.value)}
        className="cursor-pointer p-1 bg-orange-300 hover:bg-orange-500 focus:outline-none"
      >
        <option value="10" className="">
          10
        </option>
        <option value="20" className="">
          20
        </option>
      </select>
    </div>
  );
};
export default ShowItem;
