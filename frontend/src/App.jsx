import { useMemo, useState } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AnalyticsPage from "./pages/AnalyticsPage";
import LinkRedirector from "./components/LinkRedirector";
import Navbar from "./components/Navbar";

function App() {
  const [mode, setMode] = useState("light");

  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);

  const toggleMode = () => setMode((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stats" element={<AnalyticsPage />} />
          <Route path="/:shortCode" element={<LinkRedirector />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
