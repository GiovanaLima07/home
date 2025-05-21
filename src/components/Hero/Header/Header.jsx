import './Header.css'

function Header() {
    return (
        <section className="container">
            <div className="logo">
                <img className="imagem" src="/img/Logo.svg" alt="Logo Vizinhando" width="60px" />
                <h1 className="titulo">
                    <img src="/img/Tipografia_Vizinhando.svg" alt="titulo do site vizinhando" width="250px" />
                </h1>
            </div>
            <div className="menu">
                <p>Sobre</p>
                <p>Ajuda</p>
            </div>
            <div className="usuario">
                <p className="botao_login">Login</p>
                <p className="botao_cadastro">Cadastro</p>
            </div>
        </section>

    )
}

export default Header;