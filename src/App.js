import { useContext, useRef } from "react";
import { AppContext } from "./Context/AppContextProvider";
import "./styles.css";

export default function App() {
  const { auth, count, handleSignin, handleSignout } = useContext(AppContext);
  const inputRef = useRef("");
  const handleChange = () => {
    console.log(inputRef.current.value);
  };
  // console.log(auth, count, handleSignout, handleSignin);
  return (
    <div className="App">
      <h1>AuthContext Provider</h1>
      <input
        type="text"
        ref={inputRef}
        placeholder="input..."
        onChange={handleChange}
      />
      <p>User has login {count} times</p>
      <button onClick={auth ? handleSignout : handleSignin}>
        {auth ? "Logout" : "Login"}
      </button>
    </div>
  );
}
