import { listButtons } from "./listButtons";
interface ListNumber {
  headName: string;
  listContent: { id: number; name: string }[];
}
interface ListButtonItem {
  headName: string;
  listContent: { id: number; name: string }[];
}

const providerButtons = (listNumber: ListNumber) => {
  return (
    <ul className="flex flex-col">
      <h2 className="text-lg border-b-2 border-orange-100 w-full">
        {listNumber.headName}
      </h2>
      {listNumber.listContent.map((item) => (
        <li key={item.id} className="text-sm">
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export function Footer() {
  return (
    <footer className="bg-orange-400">
      <div className="w-full sm:w-3/4 m-auto p-2 md:items-center flex justify-between flex-col gap-3 items-start md:flex-col">
        {listButtons.map((item: ListButtonItem, index: number) => (
          <div key={index}>{providerButtons(item)}</div>
        ))}
      </div>
    </footer>
  );
}
