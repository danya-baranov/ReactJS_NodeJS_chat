import React from 'react'

import "./Auth.scss"
import { LoginForm } from 'modules'
import { Route } from "react-router-dom";

const Auth = () => (
    <section className="auth">
      <div className="auth__content">
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/register" component={LoginForm} />
      </div>
    </section>
  );
  
export default Auth 