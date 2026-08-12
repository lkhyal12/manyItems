import { useRef } from "react";
import { Link } from "react-router-dom";
import registerImg from "../assets/register.webp";
const Register = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  return (
    <div className="flex">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12 ">
        <form className="w-full  max-w-md bg-white p-8 rounded-lg border border-gray-300 shadow-sm">
          <div className="flex justify-between mb-6">
            <h2 className="text-xl font-bold">
              Many<span className="text-rabbit-red">Items</span>
            </h2>
          </div>
          <h2 className="text-2xl font-bold text-center mb-6">Hey There! 👋</h2>
          <p className="text-center mb-6">
            Enter your username and password to login
          </p>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Name </label>
            <input
              type="email"
              ref={nameRef}
              className="p-2 w-full rounded border border-gray-200"
              placeholder="Enter your name..."
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email </label>
            <input
              type="email"
              ref={emailRef}
              className="p-2 w-full rounded border border-gray-200"
              placeholder="Enter your email..."
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Password{" "}
            </label>
            <input
              type="paswword"
              ref={passwordRef}
              className="p-2 w-full rounded border border-gray-200"
              placeholder="Enter your password..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-950 cursor-pointer"
          >
            Sign In
          </button>

          <p className="mt-6 text-center text-sm ">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Login now
            </Link>
          </p>
        </form>
      </div>

      <div className="hidden md:block w-1/2 bg-gray-800">
        <div className="h-full flex flex-col justify-center items-center">
          <img
            src={registerImg}
            alt=""
            className="w-full h-187.5 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
