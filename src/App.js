import { useState } from "react";
import "./app.css";
import { UserContext } from "./context/UserContext";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./context/ThemeContext";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  const [user, setUser] = useState(null);
  const content = useRoutes(routes);

  return (
    <>
      <ThemeProvider theme={theme}>
        <UserContext.Provider value={{ user, setUser }}>
            {content}
        </UserContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
