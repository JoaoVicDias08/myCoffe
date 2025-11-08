import "./home.css";
import coffeeHome from "../../assets/coffeHome.png";
import blob from "../../assets/blob.svg";

export default function Home() {
  return (
    <div className="home-container" id="home">
      <div className="home-container-text">
        <h1 className="home-title">Bem-vindo ao MyCoffee</h1>
        <p className="home-paragraph">O melhor lugar para o seu café.</p>
      </div>
        <p className="home-paragraph-links">
          Descubra nossos produtos e aproveite ofertas exclusivas.
        </p>
      <div className="home-container-buttons">
        <a href="#products" className="home-button-shop">
          Ver Produtos
        </a>
        <a href="#about" className="home-button-learn">
          Sobre Nós
        </a>
      </div>

      <img src={blob} alt="Blob" className="home-blob-img"/>
      <img src={coffeeHome} alt="Home Coffee" className="home-coffe-img"/>
    </div>
  );
}
