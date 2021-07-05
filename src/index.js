import React from 'react';
import ReactDOM from 'react-dom';

// Routes Imports
import { createBrowserHistory } from "history";
import { BrowserRouter, Switch } from "react-router-dom";
import routes from "./routes";
import { getRoutes } from "./utils/getRoutes";

// Theme
import { ThemeProvider } from 'styled-components';
import defaultTheme from './assets/styles/themes/default';

// Report Web Vitals
import reportWebVitals from './reportWebVitals';

// Global Css
import { GlobalStyle } from './assets/styles/global';

// Libs
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap Css

const hist = createBrowserHistory();

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={defaultTheme}>
            {/* CSS Global */}
            <GlobalStyle />
            <BrowserRouter history={hist}>
                <Switch>
                    {
                        getRoutes("", routes)
                    }
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
