import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";

function SignIn() {
  return (
    <Layout>
      <h1 className="font-medium text-xl text-center mb-6 w-80">Welcome!</h1>
      <div className="flex flex-col w-80">
        <p className="pb-4">
          <span className="font-light text-sm">User:</span>
          <input type="text" />
        </p>
        <p>
          <span className="font-light text-sm">Password:</span>
          <input type="password" />
        </p>

        <Link to="/">
        <button className="bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2">
          Log in
        </button>
        </Link>
      </div>
    </Layout>
  );
}

export default SignIn;
