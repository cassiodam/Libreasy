import Header from "../components/header"
import Footer from "../components/footer"


const CriarConta = () => {

    return (
        <>
        <Header/>
         <main className="">
            <h1 className="text-center"> Crie sua conta</h1>
            <p className="text-center"> e verifique seu histórico de empréstimos. </p>

    <div className="flex justify-center">    
    <form className="max-w-sm mx-auto p-4 bg-gray-900 shadow rounded space-y-4">
      

      <input
        type="text"
        placeholder="Nome"
        className="w-full p-2 border border-gray-300 rounded"
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border border-gray-300 rounded"
      />

      <input
        type="password"
        placeholder="Senha"
        className="w-full p-2 border border-gray-300 rounded"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-600"
      >
        Criar Conta
      </button>
    </form>
    </div> 

         </main>
        <Footer/>
        </>
    )
}

export default CriarConta