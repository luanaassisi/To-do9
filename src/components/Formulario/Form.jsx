import React, { useState } from 'react';
import { validaEmail, validaCpf } from './ValidaForm.jsx';

function Form() {
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");

    function validaInput(event) {
        event.preventDefault();

        if (!validaEmail(email)) {
            return alert('Insira um e-mail válido.')
        } if (!validaCpf(cpf)) {
            return alert('Insira um cpf válido.')
        }
        alert('Cadastro realizado com sucesso!')

        window.location.reload()
    }

    return <div className='testa'>
                <form onSubmit={validaInput}>
                    <div className='textT'>
                        <h3 className='subtitulo'>Ajude o algoritmo a ser mais certeiro</h3>
                        <p className='loremIp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse semper pretium consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia euismod augue vel egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel urna tortor. Vivamus et arcu non felis tristique eleifend.</p>
                        <p className='morbi'> Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra. Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla varius elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra, magna ac luctus commodo, odio ante suscipit libero, at mattis augue est vel metus.</p>
                        </div>
                        <div className='items-form'>
                        <h2>Entre em contato!</h2>
                        <label htmlFor='name'>Seu nome:</label>
                        <input required type="text" />
                        <label htmlFor="email">E-mail:</label>
                        <input required onChange={(event) => setEmail(event.target.value)} type="text" value={email} />
                        <label htmlFor='cpf'>CPF:</label>
                        <input required onChange={(event) => setCpf(event.target.value)} type="text" />
                        <div className="form-check">
                            <input type="radio" name="radio" />
                            <label htmlFor="radio">Masculino</label>
                            <input type="radio" name="radio" />
                            <label htmlFor="radio">Feminino</label>
                        
                    </div>
                    
                        <button className='botao'>Enviar</button>
                    </div>
                </form>
            </div>

};

export default Form;