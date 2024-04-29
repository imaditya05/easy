import { SignupInput } from "@aditya-codes/easy-common";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setpostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="flex justify-center">
        <div>
          <div className="text-3xl font-extrabold">Create an Account</div>
          <div className="text-slate-400">
            Already have an account?
            <Link className="underline pl-2" to={"/signin"}>
              Login
            </Link>{" "}
          </div>
        </div>
        <LabelledInput
          label="Name"
          placeholder="John doe"
          onChange={(e) => {
            setpostInputs((c) => ({
              ...c,
              name: e.target.value,
            }));
          }}
        />
        <LabelledInput
          label="Email"
          placeholder="john@gmail.com"
          onChange={(e) => {
            setpostInputs((c) => ({
              ...c,
              name: e.target.value,
            }));
          }}
        />
        <LabelledInput
          label="Password"
          placeholder="123456"
          type="password"
          onChange={(e) => {
            setpostInputs((c) => ({
              ...c,
              name: e.target.value,
            }));
          }}
        />
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
  return (
    <div>
      <div>
        <label
          for="first_name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
        <input
          onChange={onChange}
          type={type || "text"}
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
}
