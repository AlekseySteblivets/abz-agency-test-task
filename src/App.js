import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { ThemeProvider } from "@mui/material/styles";

import PreviewPage from "./pages/PreviewPage";
import { theme } from "./assets/styles/theme";
import { queryClient } from "./api/queryClient";

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <PreviewPage />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
