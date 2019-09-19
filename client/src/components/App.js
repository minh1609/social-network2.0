import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import BlogNew from "./blogs/BlogNew";
import BlogShow from "./blogs/BlogShow";
import User from "./user/User";

const App = () => {
    const dispatch = useDispatch(); // use to dispatch action

    useEffect(() => {
        dispatch(fetchUser());
    });

    return (
        <div className="">
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <div className="ui container">
                            <Route path="/blogs/new" component={BlogNew} />
                            <Route
                                exact
                                path="/blogs/:_id"
                                component={BlogShow}
                            />
                            <Route path="/blogs" component={Dashboard} />
                            <Route path="/" exact component={Landing} />
                            <Route path="/user" exact component={User} />
                        </div>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
