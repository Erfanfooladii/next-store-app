const ButtonPagination = ({
  index,
  pageNumber,
  numberPage,
  setNumberPage,
}: {
  index: number;
  pageNumber: number;
  numberPage: string;
  setNumberPage: (value: string) => void;
}) => {
  return (
    <button
      className={`w-10 h-10 sm:w-14 rounded-md hover:bg-orange-200 sm:h-14 bg-orange-400 ${
        Number(numberPage) === index + 1
          ? "border-orange-800 bg-white border-solid border"
          : ""
      }`}
      value={pageNumber}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLButtonElement;
        setNumberPage(target.value);
      }}
    >
      {pageNumber}
    </button>
  );
};
export default ButtonPagination;
