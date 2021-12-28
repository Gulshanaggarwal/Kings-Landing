import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux"
import { store } from "./Store/store"

import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"

const client = new QueryClient({
});


ReactDOM.render(<QueryClientProvider client={client}><Provider store={store}><App /></Provider><ReactQueryDevtools /></QueryClientProvider>, document.getElementById("root"));


export default client;