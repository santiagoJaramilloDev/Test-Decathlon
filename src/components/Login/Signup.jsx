import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SignupBtn = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }
      className="nav-link btn"
    >
      Registrarse
    </button>
  );
};

export default SignupBtn;
