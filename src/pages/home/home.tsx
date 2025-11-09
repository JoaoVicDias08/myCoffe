import "./home.css";
import { motion } from "framer-motion";

import coffeeHome from "../../assets/coffeHome.png";
import coffeeGrains from "../../assets/coffeGrains.png";
import bgBlobYellow from "../../assets/bgBlobYellow.svg";
import bgBlobRed from "../../assets/bgBlobRed.svg";
import coffeSmoke from "../../assets/coffeSmoke.png";

export default function Home() {
  return (
    <div className="home-container" id="home">
      {/* Texto principal */}
      <motion.div
        className="home-container-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h1 className="home-title">Bem-vindo ao MyCoffee</h1>
        <p className="home-paragraph">O melhor lugar para o seu café.</p>
      </motion.div>

      {/* Parágrafo secundário */}
      <motion.p
        className="home-paragraph-links"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Descubra nossos produtos e aproveite ofertas exclusivas.
      </motion.p>

      {/* Botões */}
      <motion.div
        className="home-container-buttons"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <a href="#products" className="home-button-shop">
          Ver Produtos
        </a>
        <a href="#about" className="home-button-learn">
          Sobre Nós
        </a>
      </motion.div>

      {/* Imagens decorativas */}
      <motion.img
        src={bgBlobYellow}
        alt="BlobYellow"
        className="home-blobYellow-img"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      />
      <motion.img
        src={coffeeHome}
        alt="Home Coffee"
        className="home-coffe-img"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      />
      <motion.img
        src={bgBlobRed}
        alt="BlobRed"
        className="home-blobRed-img"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      />
      <motion.img
        src={coffeeGrains}
        alt="Coffee Grains"
        className="home-grains-img"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      />
      <motion.img
        src={coffeSmoke}
        alt="Coffee Smoke"
        className="home-coffeSmoke-img"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      />
    </div>
  );
}
