import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
//import { ThemeProvider } from "styled-components";
import App from "./App";
//import { lightTheme, darkTheme } from "./theme";
//import { theme } from "./theme";

//const root = ReactDOM.createRoot(document.getElementById("root"));
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <div>
    <QueryClientProvider client={queryClient}>
      <App />
      {/*<ReactQueryDevtools initialIsOpen={false} />*/}
    </QueryClientProvider>
  </div>
);
