import Header from "../components/header"
import Footer from "../components/footer"

const Login = () => {

    return (
            <>
            <Header/>
             <main>
                <h1 className="text-center font-bold"> Fazer login </h1>
    <div className="flex justify-center">
    <form className="max-w-sm mx-auto p-4 bg-gray-900 shadow rounded space-y-4">
      

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
        className="w-full bg-gray-600 text-white py-2 rounded hover:bg-green-600"
      >
        Entrar
      </button>
    </form>
    </div> 
                
             </main>
            <Footer/>
            </>
    )
}

export default Login