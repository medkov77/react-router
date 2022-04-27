import { Route } from "react-router-dom";
import NavBar from "./components/navBar";
import Dashboard from "./components/dashboard";
import Home from "./components/home";
import Login from "./components/login";
import Posts from "./components/posts";
import { Switch } from "react-router-dom";
import Stats from "./components/stats";
import PostsList from "./components/postsList";
import Post from "./post";
const posts = [
    { id: 1, lable: "post1" },
    { id: 2, lable: "post2" },
    { id: 3, lable: "post3" },
];
function App() {
    return (
        <div className="App">
            <NavBar />
            <h1>App</h1>
            <Switch>
                <Route
                    path="/posts/:postId"
                    render={props => <Post posts={posts} {...props} />}
                />
                <Route
                    path="/posts"
                    render={props => <PostsList posts={posts} {...props} />}
                />
                <Route path="/login" component={Login} />
                <Route path="/dashboard/stats" component={Stats} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/" exact component={Home} />
            </Switch>
        </div>
    );
}

export default App;
