// declara variavel Header armazenando a função Header para exportação e renderização
import { Link } from "react-router-dom"


const Footer = () => {

    return (
    <footer className="bg-black shadow-md py-4 mt-auto">
        <div className="flex justify-start" >
            <p> Logo-Libreasy </p>
        </div>
        <div className="flex justify-end" >
            <ul>
            <Link className="hover:text-gray-400" to="/contato">Contato</Link>
            <Link className="hover:text-gray-400" to="/developers"> Devs</Link>
            </ul>
        </div>
        
    </footer>
    )
}

export default Footer
