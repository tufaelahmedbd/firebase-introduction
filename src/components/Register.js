import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.init";

const auth = getAuth(app);

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    //--sign in --
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        if (result.user) {
          updateUserProfile();
        }
        navigate("/profile");
      })
      .catch((error) => console.log(error.message));

    //--reset form--
    setName("");
    setEmail("");
    setPassword("");
  };

  const updateUserProfile = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        console.log("profile updated");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center mt-10">
      <form
        onSubmit={handleRegister}
        className="flex flex-col gap-3 items-start mt-5"
      >
        <div className="form-control flex flex-col gap-2">
          <label htmlFor="full-name">Full Name</label>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            id="full-name"
            placeholder="Enter your Full Name"
            className=" border py-3 px-5 rounded-md w-[20rem]"
          />
        </div>
        <div className="form-control flex flex-col gap-2">
          <label htmlFor="email">Email Address</label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            id="email"
            placeholder="Enter your email"
            className=" border py-3 px-5 rounded-md w-[20rem]"
          />
        </div>

        <div className="form-control flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            id="password"
            placeholder="Enter your password"
            className=" border py-3 px-5 rounded-md w-[20rem]"
          />
        </div>
        <input
          type="submit"
          value="Register"
          className=" bg-sky-500 w-[20rem] py-3 text-white font-medium rounded-md hover:bg-sky-600 duration-300 cursor-pointer mt-3"
        />
        <p>
          Already have an account?
          <Link to="/login" className=" text-sky-500 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
