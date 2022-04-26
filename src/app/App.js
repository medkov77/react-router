import { Route } from "react-router-dom";
import NavBar from "./components/navBar";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <NavBar />
      <Route pah="dashboard" component={Dashboard} />
    </div>
  );
}

export default App;
