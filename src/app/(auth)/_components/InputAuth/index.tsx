import React from "react";

const InputAuth = ({
  inputHandler,
  value,
  nameInput,
  label,
  type,
}: {
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  nameInput: string;
  label: string;
  type?: React.HTMLInputTypeAttribute;
}) => {
  return (
    <div className="flex justify-between items-center gap-2">
      <label htmlFor={nameInput}>{label}:</label>
      <input
        type={type}
        id={nameInput}
        onChange={inputHandler}
        value={value}
        className="p-1 shadow focus:outline-none rounded-md"
        required
      />
    </div>
  );
};
export default React.memo(InputAuth);
