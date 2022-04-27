import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navBar";
import Dashboard from "./components/dashboard";
import Home from "./components/home";
import Login from "./components/login";
import Posts from "./components/posts";
import Stats from "./components/stats";
import NotFound from "./components/not-found";
function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>App</h1>
      <Switch>
        <Route path="/posts/:postId?" component={Posts} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard/stats" component={Stats} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" exact component={Home} />
        <Route path="404" component={NotFound} />
        <Redirect to="404" />
      </Switch>
    </div>
  );
}

export default App;
