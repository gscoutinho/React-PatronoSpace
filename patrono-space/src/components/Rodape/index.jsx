import React from 'react'

import sty from './Rodape.module.scss'

import logoFacebook from './assets/facebook.svg'
import logoInstagram from './assets/instagram.svg'
import logoTwitter from './assets/twitter.svg'

export default function Rodape() {
  return (
    <footer className={sty.rodape}>
      <ul>
        <li>
          <a href='/'>
            <img
              src={logoFacebook}
              alt='Facebook'
            />
          </a>
        </li>

        <li>
          <a href='/'>
            <img
              src={logoInstagram}
              alt='Instagram'
            />
          </a>
        </li>

        <li>
          <a href='/'>
            <img
              src={logoTwitter}
              alt='Twitter'
            />
          </a>
        </li>
      </ul>

      <h3>Desenvolvido por Patrono</h3>
    </footer>
  )
} 