import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css"; // Arquivo de estilos

export default function SecretFesta() {
  const [mysteryMode, setMysteryMode] = useState(true);
  const [countdown, setCountdown] = useState("00:00:00:00");

  useEffect(() => {
    if (mysteryMode) {
      const interval = setInterval(() => {
        const randomTime = `${Math.floor(Math.random() * 99)}:${Math.floor(Math.random() * 99)}:${Math.floor(Math.random() * 99)}:${Math.floor(Math.random() * 99)}`;
        setCountdown(randomTime);
      }, 500);
      return () => clearInterval(interval);
    } else {
      const targetDate = new Date("2025-06-15T00:00:00").getTime();
      const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        setCountdown(`${days}:${hours}:${minutes}:${seconds}`);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [mysteryMode]);

  return (
    <div className="container">
      <motion.h1
        className="title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        SECRET - A FESTA
      </motion.h1>
      
      <motion.p
        className="subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
      >
        A rave mais secreta e intensa que você já viu! Som, luzes e mistério te aguardam...
      </motion.p>
      
      <motion.h2
        className="countdown-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        CONTAGEM REGRESSIVA
      </motion.h2>
      
      <motion.div
        className="countdown"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        {countdown}
      </motion.div>
      
      <motion.h3
        className="event-location"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Local do Evento: 
        <motion.span 
          className="question-mark"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [1, 1.3, 1], opacity: 1 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        >
          ?
        </motion.span>
      </motion.h3>
      
      <motion.button
        className="buy-ticket-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.location.href = "#"} // Substitua # pelo link de compra
      >
        Comprar Ingresso
      </motion.button>
    </div>
  );
}
