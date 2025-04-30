const TelaDividida = ({ children, children2, imagemSrc, imagemAlt }) => {
    return (
      <div className="flex h-170">
        {/* Lado do texto */}
        <div className="w-1/2 bg-gray-900 flex items-center justify-center p-8">
          <div>{children}</div>
        </div>
  
        {/* Lado da imagem */}
        <div className="w-1/2 bg-gray-600 flex items-center justify-center">
          <img
            src={imagemSrc}
            alt={imagemAlt}
            className="max-w-full max-h-full object-contain"
            
          />
          <div>{children2}</div>
        </div>
      </div>
    );
  };
  
  export default TelaDividida;

{/* Exemplo de como utilizar em outras páginas:
    
    1 - import TelaDividida from '../components/teladividida';

    2 - 

    <TelaDividida
      imagemSrc="CAMINHO DA IMAGEM"
      imagemAlt="ALT DA IMAGEM"
    >

    CONTEUDO DO LADO ESQUERDO, EX:
    <h1> Titulo </h1>
    <p> texto aqui </p>

    </TelaDividida>


*/}
  