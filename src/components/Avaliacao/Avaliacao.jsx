import './Avaliacao.css';
import CardAvaliacao from './CardAvaliacao';
import { useRef } from 'react';

function Avaliacao() {
    const carrosselRef = useRef(null);

    const rolarCarrossel = (direcao) => {
        const container = carrosselRef.current;
        const cartao = container.querySelector('.card');

        if (!cartao) return;

        const estilo = window.getComputedStyle(container);
        const gap = parseFloat(estilo.gap) || 0;

        const larguraCartao = cartao.offsetWidth;
        const deslocamento = (larguraCartao * 1) + gap;

        if (direcao === 'next') {
            container.scrollBy({ left: deslocamento, behavior: 'smooth' });
        } else {
            container.scrollBy({ left: -deslocamento, behavior: 'smooth' });
        }
    };

    return (
        <section className="cardAvaliacaoContainer">
            <span className="material-symbols-outlined seta" onClick={() => rolarCarrossel('prev')}>
                arrow_back_ios
            </span>

            <div className="carrossel-cards">
                <div className="carrossel" ref={carrosselRef}>
                    <CardAvaliacao nomeCard="Isabella" profissaoCard="Empreendedora" imagemCard="https://storage.googleapis.com/a1aa/image/4ecb1d59-f52f-440f-89e5-f1ee40a453c4.jpg" descricaoCard="O vizinhando está sendo essencial na minha vida, através da plataforma consigo alcançar cliente que eu imaginava." />
                    <CardAvaliacao nomeCard="Guilherme" profissaoCard="Dentista" imagemCard="https://randomuser.me/api/portraits/men/42.jpg" descricaoCard="O suporte e a usabilidade do Vizinhando são excelentes. Me sinto apoiado para expandir meu negócio com segurança." />
                    <CardAvaliacao nomeCard="João" profissaoCard="Designer" imagemCard="https://randomuser.me/api/portraits/men/32.jpg" descricaoCard="O Vizinhando abriu portas que eu nem imaginava existir. É a melhor forma de alcançar quem realmente precisa do meu serviço." />
                    <CardAvaliacao nomeCard="Júlia" profissaoCard="Artesã" imagemCard="https://randomuser.me/api/portraits/women/47.jpg" descricaoCard="A plataforma Vizinhando tem um impacto real na minha rotina profissional. A facilidade para mostrar meu trabalho é impressionante." />
                    <CardAvaliacao nomeCard="Mariana" profissaoCard="Chef" imagemCard="https://randomuser.me/api/portraits/women/4.jpg" descricaoCard="O Vizinhando é uma ferramenta incrível que facilitou muito a divulgação do meu trabalho. Nunca foi tão simples conquistar novos clientes!" />
                    <CardAvaliacao nomeCard="Marcos" profissaoCard="Fotógrafo" imagemCard="https://randomuser.me/api/portraits/men/49.jpg" descricaoCard="O Vizinhando é uma ponte que conecta meu talento às pessoas certas. Com ele, meu negócio ganhou visibilidade e credibilidade que eu precisava." />
                </div>
            </div>

            <span className="material-symbols-outlined seta" onClick={() => rolarCarrossel('next')}>
                arrow_forward_ios
            </span>
        </section>
    );
}

export default Avaliacao;
