const ButtonAuth = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type: "submit" | "reset" | "button" | undefined;
}) => {
  return (
    <button
      type={type}
      className="bg-orange-400 px-10 py-2 shadow hover:bg-orange-300 rounded-full"
    >
      {children}
    </button>
  );
};
export default ButtonAuth;
