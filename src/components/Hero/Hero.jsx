import { useState, useEffect } from 'react'; // Importe os hooks corretamente
import './Hero.css';

const backgrounds = ['#ff6a00', '#1a1464', '#00b894'];

function Hero() {
  const [slideIndex, setSlideIndex] = useState(0); // Estado dentro do componente

  // Troca de cor a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % backgrounds.length);
    }, 3000);

    // Limpa o intervalo quando o componente for desmontado
    return () => clearInterval(interval);
  }, []);

  // Define o estilo de fundo dinâmico
  const backgroundStyle = {
    backgroundColor: backgrounds[slideIndex],
  };

  return (
    <>
      <main id="hero-carrossel" style={backgroundStyle}>
        <div id="pesquisa">
          <input type="text" placeholder="Serviço" />
          <input type="text" placeholder="CEP" />
          <button aria-label="Pesquisar">
            <span class="material-symbols-outlined">
              search
            </span>
          </button>
        </div>

        <div id="carrossel-controles">
          {backgrounds.map((_, idx) => (
            <button
              key={idx}
              className={idx === slideIndex ? 'active' : ''}
              onClick={() => setSlideIndex(idx)} // Muda para a cor clicada
            />
          ))}
        </div>

        <div className="container">
          <div className="hero-content">
            <h1>
              Suas soluções<br />
              podem estar na<br />
              <span>rua de cima!</span>
            </h1>

            <form aria-label="Cadastro prestador de serviços">
              <h2>
                Cadastre-se como
                prestador de serviços
              </h2>
              <label htmlFor="email">E-mail*</label>
              <input type="email" id="email" placeholder="email@email.com.br" required />
              <button type="submit">Cadastrar agora</button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Hero;
