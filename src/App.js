import { QueryClient, QueryClientProvider } from "react-query";

import PreviewPage from "./pages/PreviewPage";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./assets/styles/theme";

const queryClient = new QueryClient();

console.log(queryClient);
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <PreviewPage />
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
