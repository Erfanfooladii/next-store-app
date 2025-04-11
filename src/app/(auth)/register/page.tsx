import Link from "next/link";

const Register = () => {
  return (
    <div className=" min-h-[750px] flex items-center justify-center min-w-32">
      <form className="flex border border-orange-900 p-4 rounded-lg gap-2 flex-col items-center">
        <h1 className="text-2xl font-semibold">Register Form</h1>
        <div className="flex justify-between items-center gap-2">
          <label htmlFor="name">Your name:</label>
          <input
            type="text"
            id="name"
            className="p-1 shadow focus:outline-none rounded-md"
          />
        </div>
        <div className="flex justify-between items-center gap-2">
          <label htmlFor="name">Your email:</label>
          <input
            type="text"
            id="name"
            className="p-1 shadow focus:outline-none rounded-md"
          />
        </div>
        <div className="flex justify-between items-center gap-2">
          <label htmlFor="name">Password:</label>
          <input
            type="text"
            id="name"
            className="p-1 shadow focus:outline-none rounded-md"
          />
        </div>
        <button className="bg-orange-400 px-10 py-2 shadow hover:bg-orange-300 rounded-full">
          Register
        </button>
        <div>
          <p>
            Already have an account?{" "}
            <Link className="text-gray-600 hover:underline" href="/login">
              Login in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
export default Register;
