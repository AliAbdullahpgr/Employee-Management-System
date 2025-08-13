import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <div className="border-2 border-red-600 p-8 rounded-lg">
        <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
          <label htmlFor="email" className="text-lg text-emerald-900 p-2">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            id="email"
            className="bg-transparent text-emerald-950 outline-none text-lg border-2 border-emerald-600 px-3 py-4 rounded-full "
            type="email"
            placeholder="Enter your Email"
          />
          <label htmlFor="password" className="text-lg text-emerald-900 p-2">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            id="password"
            className="bg-transparent text-emerald-950 outline-none text-lg border-2 border-emerald-600 py-4 px-3 rounded-full "
            type="password"
            placeholder="Enter your Password"
          />
          <button
            className="bg-emerald-600 text-lg mt-6 text-white py-3 px-5 rounded-full"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
