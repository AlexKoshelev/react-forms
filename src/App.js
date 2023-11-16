import { useLocation } from "react-router-dom";
import Signin from "./components/ui/signin";
import Signup from "./components/ui/signup";
import { useRef, useState } from "react";

function App() {
  const { pathname } = useLocation();

  const handleSubmit = (e, data, ref) => {
    e.preventDefault();
    console.log(data);
    ref.current.reset();
  };
  return (
    <div className="wrapper">
      <header>
        <h1>Формы</h1>
      </header>
      <main>
        {pathname === "/" ? (
          <Signin handleSubmit={handleSubmit} />
        ) : (
          <Signup handleSubmit={handleSubmit} />
        )}
      </main>
    </div>
  );
}

export default App;
