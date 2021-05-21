import React from 'react'
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function AuthPage() {

  const { user } = useSelector((state) => state);

  if (user.loading) return <h1>Registering.....</h1>;
  if (user.redirectToHomePage) return <Redirect to="/" />;

  return (
    <div>
      <h1>Auth Page</h1>
    </div>
  )
}

export { AuthPage };
