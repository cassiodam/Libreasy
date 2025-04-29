import Header from "../components/header"
import Footer from "../components/footer"

const MinhaConta = () => {

    return (
            <>
            <Header/>
             <main>
             <div>
                <h2> Meus dados</h2>
                <p> Nome: </p>
                <p> E-mail: </p>
                <p> Senha: </p>
                <button className="hover:text-gray-400"> Alterar dados </button>
             </div>

                
            <div>
            <h2 class="font-bold text-4xl">Histórico de Livros Emprestados</h2>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Nome Livro</th>
                            <th>Autor</th>
                            <th>Data de Empréstimo</th>
                            <th>Prazo de Devolução</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        <tr>
                            <td> Titulo-do-livro</td>
                            <td> Nome-do-autor </td>
                            <td> Data-1 </td>
                            <td> Prazo-1</td>
                            <td> Emprestado </td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>
            </div>

             </main>
            <Footer/>
            </>
    )
}

export default MinhaConta