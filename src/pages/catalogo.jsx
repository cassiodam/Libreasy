import Header from "../components/header"
import Footer from "../components/footer"

const Catalogo = () => {

    return (
            <>
            <Header/>
             <main className="bg-gray-500 min-h-screen flex flex-col gap-1">

                <h1> Catálogo de Livros </h1>
                

                <div className="bg-gray-600  ">
                    <p>Pesquisa/filtro: ... </p>
                </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_9fr] gap-4">

                {/** FILTROS */}
                <div className="flex flex-col gap-2">                   
                    <div className="bg-gray-900 p-6">
                        <h2 className="text-center"> Gênero </h2>
                            <p> Aventura</p>
                            <p> Terror</p>
                            <p> Romance</p>
                            <p> Suspense </p>
                    </div>

                    <div className="bg-gray-800 p-6">
                        <h2 className="text-center"> Autor </h2>
                            <p> Rick Riordan </p>
                            <p> Emily Brunte </p>
                            <p> Outro </p>
                    </div>
                    <div className="bg-gray-700 p-6">
                        <h2 className="text-center"> Outro </h2>
                            <p> Filtro 1 </p>
                            <p> Filtro 2 </p>
                            <p> Filtro 3 </p>
                    </div>
                </div>
                  {/** LIVROS */}  
                <div className=" gap-2 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">

                    <div className="bg-gray-900 "> <p> Livro 1 </p> <p> Autor: Nome </p> <p> Disponíveis: 0 </p> <p> Em estoque: 0 </p> </div>
                    <div className="bg-gray-800 "> <p> Livro 2 </p> <p> Autor: Nome </p> <p> Disponíveis: 0 </p> <p> Em estoque: 0 </p> </div>
                    <div className="bg-gray-700 "> <p> Livro 3 </p> <p> Autor: Nome </p> <p> Disponíveis: 0 </p> <p> Em estoque: 0 </p> </div>
                    <div className="bg-gray-900 "> <p> Livro 1 </p> <p> Autor: Nome </p> <p> Disponíveis: 0 </p> <p> Em estoque: 0 </p> </div>
                    <div className="bg-gray-800 "> <p> Livro 2 </p> <p> Autor: Nome </p> <p> Disponíveis: 0 </p> <p> Em estoque: 0 </p> </div>
                    <div className="bg-gray-700 "> <p> Livro 3 </p> <p> Autor: Nome </p> <p> Disponíveis: 0 </p> <p> Em estoque: 0 </p> </div>
                    <div className="bg-gray-900 "> <p> Livro 1 </p> <p> Autor: Nome </p> <p> Disponíveis: 0 </p> <p> Em estoque: 0 </p> </div>
                    <div className="bg-gray-800 "> <p> Livro 2 </p> <p> Autor: Nome </p> <p> Disponíveis: 0 </p> <p> Em estoque: 0 </p> </div>
                    <div className="bg-gray-700 "> <p> Livro 3 </p> <p> Autor: Nome </p> <p> Disponíveis: 0 </p> <p> Em estoque: 0 </p> </div>
                    <div className="bg-gray-900 "> <p> Livro 1 </p> <p> Autor: Nome </p> <p> Disponíveis: 0 </p> <p> Em estoque: 0 </p> </div>
                    <div className="bg-gray-800 "> <p> Livro 2 </p> <p> Autor: Nome </p> <p> Disponíveis: 0 </p> <p> Em estoque: 0 </p> </div>
                    <div className="bg-gray-700 "> <p> Livro 3 </p> <p> Autor: Nome </p> <p> Disponíveis: 0 </p> <p> Em estoque: 0 </p> </div>
                    <div className="bg-gray-900 "> <p> Livro 1 </p> <p> Autor: Nome </p> <p> Disponíveis: 0 </p> <p> Em estoque: 0 </p> </div>
                    <div className="bg-gray-800 "> <p> Livro 2 </p> <p> Autor: Nome </p> <p> Disponíveis: 0 </p> <p> Em estoque: 0 </p> </div>
                    <div className="bg-gray-700 "> <p> Livro 3 </p> <p> Autor: Nome </p> <p> Disponíveis: 0 </p> <p> Em estoque: 0 </p> </div>
                </div>
                </div>

             </main>
            <Footer/>
            </>
    )
}

export default Catalogo