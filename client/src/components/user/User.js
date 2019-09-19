import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";

const User = () => {
    const auth = useSelector(state => state.auth);

    try {
        return (
            <div>
                <h4>{auth.name}</h4>
            </div>
        );
    } catch {
        return <div>Loading</div>;
    }
};

export default User;
