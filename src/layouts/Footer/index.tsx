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
      <h2 className="text-lg">{listNumber.headName}</h2>
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
      <div className="w-full sm:w-2/3 m-auto p-2 items-center flex justify-between">
        {listButtons.map((item: ListButtonItem, index: number) => (
          <div key={index}>{providerButtons(item)}</div>
        ))}
      </div>
    </footer>
  );
}
