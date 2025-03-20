import ContactDetails from "./Components/ContactDetails";
import ListLinks from "./Components/ListLinks";

const BottomContnet = () => {
  return (
    <div className="w-full bg-orange-300">
      <div className="w-full sm:w-3/4 m-auto justify-between flex gap-2 sm:gap-8 p-2 items-center">
        <ListLinks />
        <ContactDetails />
      </div>
    </div>
  );
};
export default BottomContnet;
