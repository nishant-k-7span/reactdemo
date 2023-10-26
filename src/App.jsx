import React, { useState } from "react";
// import SignUp from "./components/slider/index";
import Democompo from "./components/democompo/index";
import Textform from "./components/textform/index";
import About from "./components/about";
import Alert from "./components/alert/alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#111827";
      showAlert("dark mode enable", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode enable", "Success");
    }
  };
  return (
    <>
      <Router>
        <Democompo mode={mode} toggleMode={toggleMode} />
        {/* <SignUp /> */}
        <div className="max-w-[1280px] mx-auto pt-8 px-5 relative">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/"
              element={
                <Textform
                  showAlert={showAlert}
                  heading="Contact-us"
                  mode={mode}
                />
              }
            />
          </Routes>

          <Alert alert={alert} />

          {/* <Textform showAlert={showAlert} heading="Contact-us" mode={mode} /> */}
          {/* <About /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
