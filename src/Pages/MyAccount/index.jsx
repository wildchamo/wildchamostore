import React from "react";
import Layout from "../../Components/Layout";
import { useContext, useRef } from "react";
import { ShopContext } from "../../Context/index.jsx";

function MyAccount() {
  const context = useContext(ShopContext);

  const account = localStorage.getItem("account");
  const parsedAccount = JSON.parse(account);

  const form = useRef(null);
  const updateAccount = () => {
    event.preventDefault();
    const formdata = new FormData(form.current);
    const data = {
      name: formdata.get("name"),
      email: formdata.get("email"),
      password: formdata.get("password"),
    };

    // console.log(data);
    const stringifiedAccount = JSON.stringify(data);
    localStorage.setItem("account", stringifiedAccount);

    context.setAccount(data);
  };

  return (
    <Layout>
      <h1 className="pb-4 font-bold text-xl">My Account</h1>
      <form ref={form} className="flex flex-col w-80">
        <p className="pb-4 flex justify-between place-items-center">
          <span className="font-light text-sm">User:</span>
          <input
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm py-2 px-1"
            type="text"
            id="name"
            name="name"
            defaultValue={parsedAccount?.name}
          />
        </p>
        <p className="pb-4 flex justify-between place-items-center">
          <span className="font-light text-sm">Email:</span>
          <input
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm py-2 px-1"
            type="email"
            id="email"
            name="email"
            defaultValue={parsedAccount?.email}
          />
        </p>
        <p className="pb-4 flex justify-between place-items-center">
          <span className="font-light text-sm">Password:</span>
          <input
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm py-2 px-1"
            type="password"
            id="password"
            name="password"
            placeholder="********"
            defaultValue={parsedAccount?.password}
          />
        </p>

        <button
          onClick={() => updateAccount()}
          className="bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2 hover:cursor-pointer"
        >
          Update Account
        </button>
      </form>
    </Layout>
  );
}

export default MyAccount;
