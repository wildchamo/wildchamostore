import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import { useContext, useState, useRef } from "react";
import { ShopContext } from "../../Context/index.jsx";

function SignIn() {
  const context = useContext(ShopContext);
  const [view, setView] = useState("userInfo");

  //account
  const account = localStorage.getItem("account");
  const parsedaccount = JSON.parse(account);
  const form = useRef(null);

  const noAccountInLocalStorage = parsedaccount
    ? Object.keys(parsedaccount).length === 0
    : true;
  const noAccountInLocalSate = context.account
    ? Object.keys(context.account).length === 0
    : true;
  const hasUserAccount = !noAccountInLocalStorage || !noAccountInLocalSate;

  const handleLogin = () => {
    const stringifiedSignout = JSON.stringify(false);
    localStorage.setItem("signout", stringifiedSignout);
    context.setSignout(false);
  };
  const createAccount = () => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    const stringifiedAccount = JSON.stringify(data);
    localStorage.setItem("account", stringifiedAccount);
    console.log(data);
  };

  const renderLogIn = () => {
    return (
      <div className="flex flex-col w-80">
        <p className="pb-4">
          <span className="font-light text-sm">User:</span>
          <span>{parsedaccount?.email}</span>
        </p>
        <p>
          <span className="font-light text-sm">Password:</span>
          <span>{parsedaccount?.password}</span>
        </p>

        <Link to="/">
          <button
            onClick={() => handleLogin()}
            className="bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2 hover:cursor-pointer"
            disabled={!hasUserAccount}
          >
            Log in
          </button>
        </Link>
        <p className="text-center underline">Forgot ur password?</p>

        <button
          onClick={() => setView("create-user-info")}
          className="bg-white disabled:bg-white/40 text-black border border-black w-full rounded-lg py-3 mt-4 mb-2 hover:cursor-pointer"
          disabled={hasUserAccount}
        >
          Sign up
        </button>
      </div>
    );
  };

  const renderCreateUserInfo = () => {
    return (
      <form ref={form} className="flex flex-col w-80">
        <p className="pb-4 flex justify-between place-items-center">
          <span className="font-light text-sm">User:</span>
          <input
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm py-2"
            type="text"
            id="name"
            name="name"
            defaultValue={parsedaccount?.name}
            placeholder="Peter"
          />
        </p>
        <p className="pb-4 flex justify-between place-items-center">
          <span className="font-light text-sm">Email:</span>
          <input
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm py-2"
            type="text"
            id="email"
            name="email"
            defaultValue={parsedaccount?.email}
            placeholder="hi@helloworld.com"
          />
        </p>
        <p className="pb-4 flex justify-between place-items-center">
          <span className="font-light text-sm">Password:</span>
          <input
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm py-2"
            type="password"
            id="password"
            name="password"
            defaultValue={parsedaccount?.password}
            placeholder="********"
          />
        </p>

        {/* <Link to="/"> */}
        <button
          onClick={() => createAccount()}
          className="bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2 hover:cursor-pointer"
        >
          Sign up
        </button>
        {/* </Link> */}

        <p className="text-center">Already have an account?</p>
        <button
          onClick={() => setView("userInfo")}
          className="bg-white disabled:bg-white/40 text-black border border-black w-full rounded-lg py-3 mt-4 mb-2 hover:cursor-pointer"
          disabled={hasUserAccount}
        >
          Login
        </button>
      </form>
    );
  };
  //conditional rendering
  const renderView = () =>
    view === "create-user-info" ? renderCreateUserInfo() : renderLogIn();
  return (
    <Layout>
      <h1 className="font-medium text-xl text-center mb-6 w-80">Welcome!</h1>
      {renderView()}
    </Layout>
  );
}

export default SignIn;
