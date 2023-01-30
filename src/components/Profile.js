import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../firebase/firebase.init";
const auth = getAuth(app);
const Profile = ({ user, setUser }) => {
  const navigate = useNavigate();
  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out");
        setUser("");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="profile container mx-auto py-10">
      <h2 className="section-title text-center text-4xl text-gray-500 mb-10">
        Profile
      </h2>
      {user.email && (
        <div className="profile-card flex flex-col  items-center gap-3">
          <img
            src={user.photoURL}
            alt={user.displayName}
            className=" object-cover h-28 w-28 rounded-full"
          />
          <h3 className=" text-5xl">{user.displayName}</h3>
          <p>Email: {user.email}</p>
          <p>ID: {user.uid}</p>
          <button
            onClick={handleGoogleSignOut}
            className="google-sign-out bg-gray-700 text-white h-14 w-48 rounded-md font-medium hover:bg-[#FED049] duration-300 "
          >
            log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
