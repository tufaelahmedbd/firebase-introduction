import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../firebase/firebase.init";

const providerGoogle = new GoogleAuthProvider();
const auth = getAuth(app);
const Login = () => {
  const navigate = useNavigate();
  /*--google login--*/
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
      </div>
    </div>
  );
};

export default Login;
