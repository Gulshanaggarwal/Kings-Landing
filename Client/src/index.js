import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux"
import { store } from "./Store/store"

import { QueryClient, QueryClientProvider } from "react-query"
const client = new QueryClient({
    defaultOptions:{
        queries:{
            refetchOnWindowFocus:false,
        }
    }
});


ReactDOM.render(<QueryClientProvider client={client}><Provider store={store}><App /></Provider></QueryClientProvider>, document.getElementById("root"));


export default client;