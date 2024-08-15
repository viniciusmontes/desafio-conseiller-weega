import { useEffect, useState } from "react";
import './styles.css';

export default function Home() {
  const [welcomeMessage, setWelcomeMessage] = useState("");

  useEffect(() => {
    const userGenre = localStorage.getItem("userGenre");

    if (userGenre === "MALE") {
      setWelcomeMessage("Bem-vindo!");
    } else if (userGenre === "FEMALE") {
      setWelcomeMessage("Bem-vinda!");
    } else {
      setWelcomeMessage("Bem-vindo(a)!");
    }
  }, []);

  return (
    <div className="home-container">
      <h1>{welcomeMessage}</h1>
    </div>
  );
}
