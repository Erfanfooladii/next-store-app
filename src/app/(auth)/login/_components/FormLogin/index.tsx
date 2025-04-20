interface FormLoginProps {
  children?: React.ReactNode;
  loginHandeler: (e: React.FormEvent) => void;
}

const FormLogin = ({ children, loginHandeler }: FormLoginProps) => {
  return (
    <form
      onSubmit={loginHandeler}
      className="flex border border-orange-900 p-4 rounded-lg gap-2 flex-col items-center"
    >
      <h1 className="text-2xl font-semibold">Login Form</h1>
      <div className="flex justify-between flex-col items-center gap-2">
        {children}
      </div>
    </form>
  );
};

export default FormLogin;
