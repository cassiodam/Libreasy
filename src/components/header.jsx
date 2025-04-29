// declara variavel Header armazenando a função Header para exportação e renderização em outras pag
import { Link } from "react-router-dom"
import { useState } from 'react';


const Header = () => {
  // Estado para o dropdown da área do leitor
  const [isReaderDropdownOpen, setIsReaderDropdownOpen] = useState(false);

  return (
    <header className="bg-black shadow-sm w-full py-4 px-6 flex justify-between items-center">
  
              {/* header lado esquerdo */}
              <nav className="flex justify-start w-100 ml-4" >
            <ul className="flex items-center justify-around ml-4 w-full">
            <li><Link className="hover:text-gray-400 font-bold mr-8px" to="/">Nome-Biblioteca </Link></li>
            
            <li><Link className="hover:text-gray-400 font-bold" to="/admin"> Administração </Link></li>
            </ul>

        </nav>
      
      <div className="flex items-center space-x-6">
        {/* Área do leitor dropdown */}
        <div className="relative">
          <button
            className="px-4 py-2 text-white hover:text-gray-900 font-bold flex items-center"
            onMouseEnter={() => setIsReaderDropdownOpen(true)}
            onMouseLeave={() => setIsReaderDropdownOpen(false)}
          >
            Área do leitor
            <svg
              className={`w-4 h-4 ml-1 transition-transform ${isReaderDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Dropdown menu */}
          {isReaderDropdownOpen && (
            <div 
              className="absolute right-0 mt-2 w-25 bg-black rounded-md shadow-lg z-50 border border-gray-100"
              onMouseEnter={() => setIsReaderDropdownOpen(true)}
              onMouseLeave={() => setIsReaderDropdownOpen(false)}
            >
              <div className="py-1">
                <Link to="/src/pages/login.jsx"
                  className="block px-4 py-2 text-sm text-white font-bold hover:bg-gray-700"
                >
                  Fazer login
                </Link>
                <Link to="/src/pages/criar-conta.jsx"
                  href="#signup"
                  className="block px-4 py-2 text-sm text-white font-bold hover:bg-gray-700"
                >
                  Criar conta
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Outros itens de navegação... */}
      </div>
    </header>
  );
};

export default Header;