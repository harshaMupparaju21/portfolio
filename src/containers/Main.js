import React, { useState, useEffect } from "react";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import { settings } from "../portfolio.js";

export default function Main(propss) {
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] = useState(
    true
  );

  useEffect(() => {
    if (settings.isSplash) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        settings.splashDuration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);
  if (settings.isSplash) {
    return (
      <div>
        {isShowingSplashAnimation ? (
          <Splash {...propss} theme={propss.theme} setTheme={propss.setTheme} />
        ) : (
          <Home {...propss} theme={propss.theme} setTheme={propss.setTheme} />
        )}
      </div>
    );
  }

  //   <HashRouter basename="/">
  //   <Switch>
  //     <Route
  //      path="/"
  //      exact
  //      render={(props) => (
  //        <Home
  //          {...props}
  //          theme={propss.theme}
  //          setTheme={propss.setTheme}
  //        />
  //      )}
  //    />
  // </Switch>
  // </HashRouter>
  //  else {
  //   return (
  //     <div>
  //       <HashRouter basename="/">
  //         <Switch>
  //           <Route
  //             path="/"
  //             exact
  //             render={(props) => (
  //               <Home
  //                 {...props}
  //                 theme={propss.theme}
  //                 setTheme={propss.setTheme}
  //               />
  //             )}
  //           />
  //           <Route
  //             path="/home"
  //             render={(props) => (
  //               <Home
  //                 {...props}
  //                 theme={propss.theme}
  //                 setTheme={propss.setTheme}
  //               />
  //             )}
  //           />
  //           <Route
  //             path="/experience"
  //             exact
  //             render={(props) => (
  //               <Experience
  //                 {...props}
  //                 theme={propss.theme}
  //                 setTheme={propss.setTheme}
  //               />
  //             )}
  //           />
  //           <Route
  //             path="/education"
  //             render={(props) => (
  //               <Education
  //                 {...props}
  //                 theme={propss.theme}
  //                 setTheme={propss.setTheme}
  //               />
  //             )}
  //           />
  //           <Route
  //             path="/contact"
  //             render={(props) => (
  //               <Contact
  //                 {...props}
  //                 theme={propss.theme}
  //                 setTheme={propss.setTheme}
  //               />
  //             )}
  //           />
  //           <Route
  //             path="/projects"
  //             render={(props) => (
  //               <Projects
  //                 {...props}
  //                 theme={propss.theme}
  //                 setTheme={propss.setTheme}
  //               />
  //             )}
  //           />
  //         </Switch>
  //       </HashRouter>
  //     </div>
  //   );
  // }
}
