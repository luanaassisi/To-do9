import React from 'react';
import { validaEmail, validaCpf } from '../Formulario/ValidaForm.jsx';


function Header() {

    return (
        <header className="main">
            <h2>Veja todos os produtos</h2>
                <div className='menu'>
                    <nav>
                        <ul className='organiza'>
                            <li>
                                <button>Conheça a Linx</button>
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

