import { signInWithGooglePopup, creatUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocref = await creatUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign IN Page</h1>
      <button onClick={logGoogleUser}>
        SignIn with Google Popup
      </button>
    </div>
  );
};

export default SignIn;
