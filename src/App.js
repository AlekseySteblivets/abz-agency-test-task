import PreviewPage from "./pages/PreviewPage";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./assets/styles/theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <PreviewPage />
      </ThemeProvider>
    </div>
  );
}

export default App;
