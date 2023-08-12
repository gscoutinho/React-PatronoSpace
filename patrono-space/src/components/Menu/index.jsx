
import sty from './Menu.module.scss'

import iconHomeAct from './assets/home-ativo.png'
import iconLiked from './assets/mais-curtidas-inativo.png'
import iconSeen from './assets/mais-vistas-inativo.png'
import iconNew from './assets/novas-inativo.png'
import iconSurprise from './assets/surpreenda-me-inativo.png'


export default function Menu() {
  return (
    <nav className={sty.menu}>
        <ul className={sty.menu__lista}>
            <li className={sty.menu__item}>
                <img
                src={iconHomeAct}
                alt='Home'
                />
                <a href="/">Início</a>
            </li>
            <li className={sty.menu__item}>
                <img
                src={iconSeen}
                alt='Home'
                />
                <a href="/">Mais vistas</a>
            </li>
            <li className={sty.menu__item}>
                <img
                src={iconLiked}
                alt='Home'
                />
                <a href="/">Mais curtidas</a>
            </li>
            <li className={sty.menu__item}>
                <img
                src={iconNew}
                alt='Home'
                />
                <a href="/">Novas</a>
            </li>
            <li className={sty.menu__item}>
                <img
                src={iconSurprise}
                alt='Home'
                />
                <a href="/">Surpreenda-me</a>
            </li>
        </ul>
    </nav>
  )
}
