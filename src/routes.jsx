import Login from "./components/ui/login";
import Logup from "./components/ui/sigup";

const routes = () => [
  { path: "", element: <Login /> },
  { path: "logup", element: <Logup /> },
];
export default routes;
