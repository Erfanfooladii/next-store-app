import Link from "next/link";

const ListLinks = () => {
  return (
    <ul className="flex gap-2">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/About">About</Link>
      </li>
      <li>
        <Link href="/Contact">Contact</Link>
      </li>
    </ul>
  );
};
export default ListLinks;
