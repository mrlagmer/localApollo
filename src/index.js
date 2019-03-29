import React from "react";
import ReactDOM from "react-dom";

import App from "./pages/App";

import { ApolloProvider } from "react-apollo";
import { client } from "./apollo";

const WrappedApp = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(WrappedApp, document.getElementById("root"));
// Don’t be a sap. Wrap your app.
