// declara variavel Header armazenando a função Header para exportação e renderização
const Header = () => {

    return (
    <header>
        <div class="header-left">
        <a href="#" class="logo">Nome da Biblioteca</a>
    </div>
    <div class="header-right">
        <nav>
            <ul>
  
                <li>
                    <a href="#" class="perfil-btn"></a>
                </li>
                <li>
                    <a href="#" class="perfil-btn">Sair</a>
                </li>
                
                <li>
                    <button id="theme-toggle">🌙</button>
                </li>
            </ul>
        </nav>
    </div>
        
    </header>
    )
}

export default Header
