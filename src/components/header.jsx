// declara variavel Header armazenando a função Header para exportação e renderização
import { Link } from "react-router-dom"

const Header = () => {

    return (
    <header className="bg-black shadow-md">
        {/* header esquerdo */}
        <div className="flex justify-start" >
        <Link className="hover:text-gray-400" to="/">Nome-Biblioteca</Link>
    </div>
    {/* Header direito */}
    <div class="flex justify-end">
        
            <ul className="flex gap-4 list-none p-0">
  
                <li>
                    <Link className="hover:text-gray-400" to="/minha-conta">Minha-Conta</Link>
                </li>
                <li>
                    <a>Sair</a>
                </li>
                
                <li>
                    <button>🌙</button>
                </li>
            </ul>
        
    </div>
        
        
    </header>
    )
}

export default Header
