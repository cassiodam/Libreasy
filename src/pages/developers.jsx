import Header from "../components/header"
import Footer from "../components/footer"

const Developers = () => {

    return (
        <>
        <Header/>
        <main class="main-contato">
        <div class="pagina-contato">
            <h1 class="font-bold text-4xl">Libreasy - Informações </h1>
            <p> O site Libreasy possuí o objetivo de facilitar a consulta ao acervo bibliotecario.</p>
            <p> Caso tenha interesse em algum livro deve ir pessoalmente a biblioteca em questão retirá-lo. </p>
            <div class="quem-somos">
                <h2 class="font-bold text-3xl">Quem Somos</h2>
                <p>Somos uma equipe de desenvolvedores preocupados com o incentivo à leitura.</p>
            </div>
           
            <div class="missao-visao-valores">
                <h2 class="font-bold text-3xl">Missão</h2>
                <p>Desenvolver aplicações e sites em prol da educação.</p>
                <h2 class="font-bold text-3xl">Visão</h2>
                <p>Ser referência em desenvolvimento de aplicações na região.</p>
                <h2 class="font-bold text-3xl">Valores</h2>
                <p>Transparência, Inovação e Comprometimento.</p>
            </div>
            
            <div class="contato-info">
                <h2 class="font-semibold text-xl">Contato</h2>
                <p><strong>E-mail:</strong> contato@libreasy.com</p>
                <p><strong>Telefone:</strong> (13) 91234-5678</p>
            </div>
        </div>
        </main>
        <Footer/>
        </>

)
}

export default Developers