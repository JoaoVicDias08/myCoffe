import './navbar.css'

export default function Navbar() {
    
    return (
        <nav className='nav-bg'>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">Sobre nós</a></li>
                <li><a href="#products">Produtos</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>
        </nav>
    )
}