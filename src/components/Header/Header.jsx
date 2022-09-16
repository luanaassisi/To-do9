import React from 'react';
import { validaEmail, validaCpf } from '../Formulario/ValidaForm.jsx';


function Header() {

    return (
        <header className="main">
            <p>uma seleção de produtos</p>
            <h2>especial para você</h2> <br />
            <h4>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</h4>
           
                <div className='menu'>
                    <nav>
                        <ul className='organiza'>
                            <li>
                                <button>Conheça a Linx</button>
                            </li>
                            <li>
                                <button>Ajude o algoritmo</button>
                            </li>
                            <li>
                                <button>Seus produtos</button>
                            </li>
                            <li>
                                <button>Compartilhe</button>
                            </li>
                        </ul>
                    </nav>
                </div>

        </header>
    );

};
export default Header;

