interface FormAuthProps {
  children?: React.ReactNode;
  formHandler: (e: React.FormEvent) => void;
  title: string;
}

const FormAuth = ({ children, formHandler, title }: FormAuthProps) => {
  return (
    <form
      noValidate
      onSubmit={formHandler}
      className="flex border border-orange-900 p-4 rounded-lg gap-2 flex-col items-center"
    >
      <h1 className="text-2xl font-semibold">{title}</h1>
      <div className="flex justify-between flex-col items-center gap-2">
        {children}
      </div>
    </form>
  );
};

export default FormAuth;
