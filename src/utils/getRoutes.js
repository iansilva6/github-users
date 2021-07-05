import React from "react";
import { Route } from "react-router-dom";

export const getRoutes = (routes) => {
    return routes.map((prop, key) => {
        return (
            <Route
                path={prop.path}
                component={prop.component}
                key={key}
            />
        )
    });
};