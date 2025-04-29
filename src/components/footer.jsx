// declara variavel Header armazenando a função Header para exportação e renderização
import { Link } from "react-router-dom"


const Footer = () => {

    return (
    <footer className="bg-black shadow-md py-4 mt-auto">

        {/* footer lado esquerdo */}
        <div className="hover:bg-gray-800 " >
        <Link to="/developers">
            <figure className="w-14 h-14 rounded overflow-hidden">
                <img src="./src/assets/logo.png" alt="logo"/>
            </figure>
        </Link>
        </div>

        {/* footer lado direito */}
        <div className="flex justify-end" >
            <Link className="hover:text-gray-400" to="/contato">Contato</Link>
        </div>
        
    </footer>
    )
}

export default Footer
