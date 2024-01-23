import React from "react";
import { Link } from "react-router-dom";
import { Button, Label, TextInput} from 'flowbite-react';

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row 
      md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link
            to="/"
            className="self-center whitespace-nowrap font-semibold
         dark:text-white text-4xl"
          >
            <span
              className="px-2 py-1 bg-gradient-to-r from-indigo-600
         rounded-lg text-black"
            >
              Open blog
            </span>
          </Link>

          <p className="text-sm mt-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            aspernatur placeat quibusdam earum? Maiores velit eveniet,
            temporibus numquam quasi facilis reprehenderit quo? Consequatur
            alias, est libero ducimus blanditiis ab id?
          </p>
        </div>
        {/*right side*/}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
            <Label value="Your username"/>
            <TextInput type='text' placeholder='Username' id='username'/>
            </div>

            <div>
            <Label value="Your email"/>
            <TextInput type='text' placeholder='mail@company.com' id='email'/>
            </div>

            <div>
            <Label value="Your password"/>
            <TextInput type='text' placeholder='Password' id='password'/>
            </div>
            <Button gradientDuoTone='purpleToPink'>
              Sign Up
            </Button>

          </form>

          <div className="flex gap-4 text-sm mt-5">
            <span>Have an account?</span>
              <Link to='/sign-in' className="text-blue-500">
                Sign In
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
