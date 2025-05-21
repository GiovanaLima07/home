import { useState, useEffect } from 'react'; // 
import './Hero.css';


const backgrounds = ["url('/imgHero/fundoCarrossel.svg')", "url('/imgHero/fundoCarrossel2.svg')", "url('/imgHero/fundoCarrossel3.svg')"];

function Hero() {
  const [slideIndex, setSlideIndex] = useState(0); 

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % backgrounds.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const backgroundStyle = {
    backgroundImage: backgrounds[slideIndex],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
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

        <div className="hero-container">
          <div className="hero-content">
            <h1>
              Suas soluções<br />
              podem estar na<br />
              <span>rua de cima!</span>
            </h1>

            <form className='formulario-hero' aria-label="Cadastro prestador de serviços">
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
