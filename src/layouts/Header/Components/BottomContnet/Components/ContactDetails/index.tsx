import { dataDetails } from "./data";
const ContactDetails = () => {
  return (
    <ul className="flex gap-3">
      {dataDetails.map((item, index) => (
        <li key={index} className="flex gap-1">
          <span>{item.icon}</span>
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  );
};
export default ContactDetails;
