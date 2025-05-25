import './Avaliacao.css';

function CardAvaliacao({ nomeCard, profissaoCard, imagemCard, descricaoCard }) {
  return (
    
      <div className='card'>
        <img className='perfil-card' src={imagemCard} alt='Perfil' />
        <div className='texto-card'>
          <p>{nomeCard}</p>
          <p>{profissaoCard}</p>
        </div>
        <div className='card-descricao'>
          <p>{descricaoCard}</p>
        </div>
      </div>
  );
}

export default CardAvaliacao;
