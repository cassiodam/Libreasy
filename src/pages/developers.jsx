import Header from "../components/header"
import Footer from "../components/footer"
import { Link } from "react-router-dom"

const Developers = () => {

    return (
        <>
        <Header/>
        <main>
        <div >
            <h1 className="font-bold text-4xl bg-gray-900 text-center">Libreasy - Desenvolvedores </h1>
            
            <div className="bg-gray-800 text-center">
                <h2 class="font-bold text-3xl">Quem Somos</h2>
                <p>Somos uma equipe de desenvolvedores preocupados com o incentivo à leitura.</p>
            </div>
           
            <div className="bg-gray-700 text-center">
                <h2 class="font-bold text-3xl">Missão</h2>
                <p>Desenvolver aplicações e sites em prol da educação.</p>
                <h2 class="font-bold text-3xl ">Visão</h2>
                <p>Ser referência em desenvolvimento de aplicações na região.</p>
                <h2 class="font-bold text-3xl">Valores</h2>
                <p>Transparência, Inovação e Comprometimento.</p>
            </div>
            
            <div className="bg-gray-800 text-center">
                <h2 class="font-semibold text-xl ">Contato</h2>
                <p><strong>E-mail:</strong> contato@libreasy.com</p>
                <p><strong>Telefone:</strong> (13) 91234-5678</p>
            </div>

            <div className="bg-gray-900 text-center">
            <p>Para mais informações clique <Link className="hover:underline hover:text-gray-400 hover:italic " to="/">aqui</Link>.
            </p>
            </div>
        </div>
        </main>
        <Footer/>
        </>

)
}

export default Developers