import './App.css';
import { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContextProvider";
import { Navbar } from "./Components/Navbar";
import { Form } from "./Components/Form";
import { Footer } from "./Components/Footer";

export default function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className="App"
      style={{
        backgroundColor: theme.bodyBackground,
        color: theme.textColor
      }}
    >
      <Navbar />
      <Form />
      <Footer />
    </div>
  );
}

