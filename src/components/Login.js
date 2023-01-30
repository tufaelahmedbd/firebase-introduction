import {
  GithubAuthProvider,
  GoogleAuthProvider,
  FacebookAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import app from "../firebase/firebase.init";

const providerGoogle = new GoogleAuthProvider();
const providerGithub = new GithubAuthProvider();
const providerFacebook = new FacebookAuthProvider();
const auth = getAuth(app);
const Login = ({ user }) => {
  const navigate = useNavigate();
  //--google login--
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, providerGoogle)
      .then((data) => {
        console.log(data.user);
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // --github login--
  const handleGithubSignIn = () => {
    signInWithPopup(auth, providerGithub)
      .then((data) => {
        console.log(data.user);
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //--facebook login--
  const handleFacebookSignIn = () => {
    signInWithPopup(auth, providerFacebook)
      .then((data) => {
        console.log(data.user);
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login container mx-auto py-10">
      <h2 className="section-title text-center text-4xl text-gray-500 mb-10">
        Login
      </h2>
      <div className="login-platforms flex flex-col gap-5 items-center">
        <button
          onClick={handleGoogleSignIn}
          className="google-sign-in bg-gray-700 text-white h-14 w-96 rounded-md font-medium hover:bg-[#FED049] duration-300 "
        >
          Login with Google
        </button>
        <button
          onClick={handleGithubSignIn}
          className="google-sign-in bg-gray-700 text-white h-14 w-96 rounded-md font-medium hover:bg-[#FED049] duration-300 "
        >
          Login with Github
        </button>
        <button
          onClick={handleFacebookSignIn}
          className="google-sign-in bg-gray-700 text-white h-14 w-96 rounded-md font-medium hover:bg-[#FED049] duration-300 "
        >
          Login with Facebook
        </button>
        <form className="flex flex-col gap-3 items-start mt-5">
          <div className="form-control flex flex-col gap-2">
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email"
              className=" border py-3 px-5 rounded-md w-[20rem]"
            />
          </div>
          <div className="form-control flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className=" border py-3 px-5 rounded-md w-[20rem]"
            />
          </div>
          <input
            type="submit"
            value="Login"
            className=" bg-sky-500 w-full py-3 text-white font-medium rounded-md hover:bg-sky-600 duration-300 cursor-pointer"
          />
          <p>
            Don't have an account?{" "}
            <Link to="/register" className=" text-sky-500 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
