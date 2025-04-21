import Link from "next/link";
interface BottomAuthTypes {
  title: string;
  contentLink: string;
  href: string;
}
const BottomAuth = ({ title, contentLink, href }: BottomAuthTypes) => {
  return (
    <div>
      <p>
        {title}{" "}
        <Link className="text-gray-600 hover:underline" href={href}>
          {contentLink}
        </Link>
      </p>
    </div>
  );
};
export default BottomAuth;
