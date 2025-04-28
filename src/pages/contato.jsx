import Header from "../components/header"
import Footer from "../components/footer"

const Contato = () => {

    return (
            <>
            <Header/>
             <main>
                
                <h1 class="font-bold text-4xl"> Contato: Biblioteca X</h1>
                <p> Horário de funcionamento:</p>
                <ul>
                    <p> Segunda à Sexta-feira: 07h às 17h.</p>
                    <p> Sábado: das 08h às 12h.</p>
                </ul>
                <p> Endereço: Rua Um, 199 </p>
                <p> Telefone: (13) 3333-0000</p>
                <p> Email: livros@biblioteca.com </p>

             </main>
            <Footer/>
            </>
    )
}

export default Contato