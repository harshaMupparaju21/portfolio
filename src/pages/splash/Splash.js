import React from "react";
import "./Splash.css";

function AnimatedSplash(props) {
  return (
    <div className="logo_wrapper">
      <div className="loading">
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
      </div>
    </div>
  );
}

function Splash(props) {
  // const [redirect, setRedirect] = useState(false);
  // setTimeout(() => setRedirect(true), 2000);

  return <AnimatedSplash theme={props.theme} />;
}

export default Splash;
