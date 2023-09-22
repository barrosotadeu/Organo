import './Rodape.css'


const Rodape = () => {
    return (
        <footer className='rodape'>
            <div className='icones'>
                <img src="/imagens/fb.png" alt="Ícone Facebook" />
                <img src="/imagens/tw.png" alt="Ícone Twiter"/>
                <img src="/imagens/ig.png" alt="Ícone Instagram" />
            </div>
            <div className='logo'>
                <img src="/imagens/logo.png" alt="Logo da Organo"/>

            </div>
            <div className='texto'>
                <p>Desenvolvido por Alura</p>

            </div>

        </footer>
    )
}


export default Rodape;