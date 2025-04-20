import { LoginType } from "@/app/(auth)/types";

const InputLogin = ({
  inputHandeler,
  userAuth,
  nameInput,
  label,
  ...props
}: {
  inputHandeler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  userAuth: LoginType;
  nameInput: string;
  label: string;
}) => {
  return (
    <div className="flex justify-between items-center gap-2">
      <label htmlFor={nameInput}>{label}:</label>
      <input
        type="text"
        id={nameInput}
        onChange={inputHandeler}
        value={userAuth.email}
        className="p-1 shadow focus:outline-none rounded-md"
        required
      />
    </div>
  );
};
export default InputLogin;
