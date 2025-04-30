import Header from "../components/header"
import Footer from "../components/footer"
import TelaDividida from '../components/teladividida';

const Contato = () => {

    return (
            <body>
            <Header/>
             <main >

             <TelaDividida 
      imagemSrc="/src/assets/react.svg"
      imagemAlt="ALT DA IMAGEM"
    >

<h1> Biblioteca X</h1>
                <h2> Horário de funcionamento </h2>
                <ul>
                    <p> Segunda à Sexta-feira: 07h às 17h.</p>
                    <p> Sábado: das 08h às 12h.</p>
                </ul>
                <h2> Contatos </h2>
                <p> Endereço: Rua Um, 199 </p>
                <p> Telefone: (13) 3333-0000</p>
                <p> Email: sac@biblioteca.com </p>

    </TelaDividida>
                


             </main>
            <Footer/>
            </body>
    )
}

export default Contato