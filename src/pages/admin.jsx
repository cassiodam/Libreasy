import Header from "../components/header"
import Footer from "../components/footer"

const Admin = () => {

    return (
    <body>
    <Header/>
    <main className="flex">
    {/* Coluna à esquerda: MENU */}
	<div className="">
        <ul>
            <li> <h2> Menu </h2> </li>
            <li> <p> Empréstimos</p> </li>
            <li> Livros </li>
            <li> Autores </li>
            <li> Generos </li>
        </ul>

    </div>

    {/* Conteúdo mostrado a partir da opção escolhida no MENU*/}
    <div className="">
    <ul>
            <li> <h2> Conteudos </h2> </li>
            <li> <p> Livros</p> </li>
            <li> 1 </li>
            <li> 2 </li>
            <li> 3 </li>
        </ul>
    </div>

    </main>
    <Footer/>
    </body>
    )
}

export default Admin