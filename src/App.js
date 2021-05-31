import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";

function App() {
    const value = localStorage.getItem("theme");
    const [theme, setTheme] = useState(value === "true" ? true : false);

    useEffect(() => {
        document.getElementById("body").className =
            theme === true ? "dark" : "";
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <Router>
            <div className="dark:bg-gray-900 h-screen transition duration-500 overflow-hidden select-none">
                <Navbar theme={theme} setTheme={setTheme} />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/skills" component={Skills} />
                    <Route path="/works" component={Works} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
