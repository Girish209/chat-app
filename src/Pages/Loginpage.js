import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Loginpage() {
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    email.length > 0 && loginUser(email, password);

  };

  return (
    <div className="w-full h-[100vh] flex items-center justify-center" style={{ backgroundColor: "#9A616D" }}>
      <div className="w-[95%] h-[95%] flex bg-white rounded-xl overflow-hidden shadow-xl">
        <div className="w-[50%] h-full flex items-center">
          <img src="/images/camp.png" alt="" className="h-full object-cover"/>
        </div>
        <div className="w-[50%] h-full flex items-center">
          <form onSubmit={handleSubmit} className="w-full px-10">
            <h5 className="text-3xl font-bold mb-3 pb-3" style={{ letterSpacing: 1 }}>
              Sign into your account
            </h5>
            <div className="form-outline mb-4">
              <input
                type="email"
                id="form2Example17"
                className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded py-2 px-4 text-lg leading-normal rounded"
                name="email"
              />
              <label className="form-label" htmlFor="form2Example17">
                Email address
              </label>
            </div>
            <div className="form-outline mb-4">
              <input
                type="password"
                id="form2Example27"
                className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded py-2 px-4 text-lg leading-normal rounded"
                name="password"
              />
              <label className="form-label" htmlFor="form2Example27">
                Password
              </label>
            </div>
            <div className="pt-1 mb-4">
              <button className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline bg-gray-900 text-white hover:bg-gray-900 py-3 px-4 leading-tight text-xl block w-full" type="submit">
                Login
              </button>
            </div>
            <a className="text-xs text-gray-700" href="#!">
              Forgot password?
            </a>
            <p className="mb-5 lg:pb-2" >
              Don't have an account?{" "}
              <Link to="/register" style={{ color: "#393f81" }}>
                Register Now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;

