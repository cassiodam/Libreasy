// declara variavel Header armazenando a função Header para exportação e renderização
const Footer = () => {

    return (
    <footer>
        <div class="footer-left">
            <img class="h-8 hover:animate-bounce" src="{% static 'Images/Libreasy_logo.jpg' %}" alt="Logo Libreasy" class="footer-logo"/>
        </div>
        <div class="footer-right">
            <a href="">Contato</a>
            <a href="">Developers</a>
        </div>
        
    </footer>
    )
}

export default Footer
