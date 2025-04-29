// declara variavel Header armazenando a função Header para exportação e renderização
import { Link } from "react-router-dom"

const Header = () => {

    return (
    <header className="bg-black shadow-md">
        {/* header lado esquerdo */}
        <nav className="flex justify-start w-50vw" >
            <ul className="flex space-x-4 items-center justify-around">
            <li><Link className="hover:text-gray-400 font-bold mr-8px" to="/">Nome-Biblioteca </Link></li>
            
            <li><Link className="hover:text-gray-400 font-bold" to="/admin"> Administração </Link></li>
            </ul>

        </nav>

        {/* Header lado direito */}
        <div class="flex justify-end">
        
            <ul className="flex gap-4 list-none">
                <li>
                    <Link className="hover:text-gray-400 font-bold" to="/minha-conta">Área do leitor</Link>
                </li>
           
                <li>
                    <button className="hover:bg-gray-700">🌙</button>
                </li>
            </ul>    
        </div>
        
        
    </header>
    )
}

export default Header
