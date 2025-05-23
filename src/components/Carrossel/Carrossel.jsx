import { useState } from 'react';
import './carrossel.css';

const slides = [
    {
        imagem: '/imgCarrossel/jardineiro.jpg',
        titulo: 'Contrate um jardineiro',
        texto: 'Aqui você pode encontrar o profissional que precisa',
        corBotao: '#fd7708',
    },
    {
        imagem: '/imgCarrossel/personal.jpg',
        titulo: 'Contrate um Personal Trainer',
        texto: 'Profissionais Qualificados para Atender Suas Necessidades',
        corBotao: '#200c80',
    },
    {
        imagem: '/imgCarrossel/tatuador.jpg',
        titulo: 'Contrate um tatuador',
        texto: 'Serviços Especializados ao Seu Alcance',
        corBotao: '#3d50e0',
    },
    {
        imagem: '/imgCarrossel/fotografo.jpg',
        titulo: 'Contrate um fotografo',
        texto: 'Descubra e Contrate Especialistas de Confiança',
        corBotao: '#7D43EB',
    },
    {
        imagem: '/imgCarrossel/cabelereiro.jpg',
        titulo: 'Contrate um cabeleireiro',
        texto: 'Transforme Seu Dia com Profissionais de Confiança',
        corBotao: '#fd7708',
    },
];


function Carrossel() {
    const [index, setIndex] = useState(0);
    const slideAtual = slides[index];

    const anterior = () => {
        const novoIndex = index === 0 ? slides.length - 1 : index - 1;
        setIndex(novoIndex);
    };

    const proximo = () => {
        const novoIndex = index === slides.length - 1 ? 0 : index + 1;
        setIndex(novoIndex);
    };


    return (
        <section id="carrossel">
            <div id="textos-carrossel">
                <h2 style={{ color: slideAtual.corBotao }}>{slideAtual.titulo}</h2>
                <p>{slideAtual.texto}</p>
                <button style={{ backgroundColor: slideAtual.corBotao }}>
                    Clique Aqui
                </button>
            </div>
            <div id="img-carrossel">
                <img className="image-carrossel" src={slideAtual.imagem} alt={slideAtual.titulo} />
                <div className="navegacao">
                    <span className="material-symbols-outlined"
                    style={{ backgroundColor: slideAtual.corBotao }} onClick={anterior}>chevron_left</span>
                    <div className="barra-progresso">
                        {slides.map((_, i) => (
                            <div
                                key={i}
                                className={`progresso ${i === index ? 'ativo' : ''}`}
                                style={{
                                    backgroundColor: i === index ? slideAtual.corBotao : 'transparent',
                                    border: i === index ? 'none' : '1px solid transparent'
                                }}
                            ></div>
                        ))}
                    </div>
                    <span className="material-symbols-outlined" style={{ backgroundColor: slideAtual.corBotao }} onClick={proximo} >chevron_right</span>
                </div>
            </div>
        </section>
    );
}

export default Carrossel;
