import React from "react";
import { Form, Link, redirect } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/userSlice";

export const action = (store) => {
  return async({request}) => {
    const formData = await request.formData();
    const data1 = Object.fromEntries(formData);
    try {
      const {data} = await customFetch.post('/auth/local', data1);
      store.dispatch(loginUser(data));
      toast.success('Logged in successfully');
      
      return redirect('/');
    } catch (error) {
      const errorMessage = error?.response?.data?.error?.message || 'Please check your credentials';
      toast.error(errorMessage);
      console.log(error);
      return null
    }
  }
}

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-3xl text-center font-bold">Login</h4>
        <FormInput
          type="email"
          label="email"
          name="identifier"
          defaultValue="test@test.com"
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          defaultValue="secret"
        />

        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>
        <button type="button" className="btn btn-secondary btn-block">
          guest user
        </button>
        <p className="text-center">
          Not a member yet ?{" "}
          <Link
            to="/register"
            className="ml-2 link link:hover link:primary capitalize"
          >
            Register Now
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
