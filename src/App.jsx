import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Form from './components/Formulario/Form.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {

  const [pagina, setPagina] = useState(1);

  const [dado, setDado] = useState([]);


  const apiUrl = `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1`

  const getDado = async () => {

    try {
      let res = await fetch(apiUrl)
      let dadoTransformado = await res.json()

      setDado([...dado, ...dadoTransformado.products])
    } catch (error) {
      alert("Erro!");
    }
  }

  const informacoes = dado.map(
    (element) =>
      <>
        <div className='conteudo'>
          <h3> {element.name} </h3>
          <figure>
            <img className='fotoProduto' src={element.image} alt='Foto do produto' />
          </figure>
          <h5> {element.description} </h5>
          <h4><s> {'De R$:' + element.oldPrice} </s></h4>
          <h3><em> {'Por R$:' + element.price} </em></h3>
          <button className='botao'>Comprar</button>
        </div>
      </>
  );

  const mostrarMais = () => {
    setPagina(pagina + 1)
  };

  useEffect(() => {
    getDado()
  }, [pagina])

  return (
    <div className="App">
      <Header />
      <Form />
      <section className="center">{informacoes} 
        <button className="botaoMostra" onClick={mostrarMais}>Ainda mais produtos aqui</button>
        </section>
        <Footer />
    </div>
  )
}

export default App;
