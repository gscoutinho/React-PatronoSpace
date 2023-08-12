import sty from './Header.module.scss'


import logo from './assets/logo.png'
import searchIcon from './assets/search.png'


const Header = () => {
    return (
        <header className={sty.cabecalho}>
            <div className='logoPatrono'>
                <img
                    src={logo}
                    alt='logo'
                />

            </div>

            <div className={sty.cabecalho__container}>
                <input
                    className={sty.cabecalho__input}
                    type='text'
                    placeholder={'O que você procura?'}
                />
                <img
                    src={searchIcon}
                    alt='ícone do input'
                />
            </div>
        </header>
    )
}


export default Header