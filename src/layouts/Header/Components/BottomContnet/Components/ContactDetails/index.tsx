import dynamic from "next/dynamic";
import { dataDetails } from "./data";
import useWindowDimensions from "@/utils/media.hook";

const ContactDetails = () => {
  const { width } = useWindowDimensions();

  if (width !== null && width > 500) {
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
  } else {
    return (
      <select className="max-w-24 p-2 rounded-md">
        {dataDetails.map((item, index) => (
          <option key={index} className="flex">
            {item.name}
          </option>
        ))}
      </select>
    );
  }
};

export default dynamic(() => Promise.resolve(ContactDetails), { ssr: false });
