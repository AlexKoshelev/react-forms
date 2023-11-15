import { useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  const element = useRoutes(routes());
  return (
    <div className="wrapper">
      <header>
        <h1>Формы</h1>
      </header>
      <main>{element}</main>
    </div>
  );
}

export default App;
