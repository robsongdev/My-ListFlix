import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
<<<<<<< HEAD
import Button from '../../../components/Button/';
import useForm from '../../../hooks/useForm';




function CadastroCategoria(){
=======
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
>>>>>>> ec180bcffff187abac85494c8e378184944a8f97

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
<<<<<<< HEAD
    descrição:'',
    cor: ''
  }
    
  
  const {handleChange,values, clearForm} = useForm(valoresIniciais)
  const [categorias, setCategorias] = useState([])
    
    
    

    useEffect(()=>{
    const URL_TOP = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080/categorias'
    :'http://mylistflix.herokuapp.categorias';
=======
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://devsoutinhoflix.herokuapp.com/categorias';
    // E a ju ama variáveis
>>>>>>> ec180bcffff187abac85494c8e378184944a8f97
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
<<<<<<< HEAD
      
    },[])
    
    return(
      <PageDefault>
          <h1>Cadastro de Categoria: {values.nome} </h1>

          <form onSubmit={function handleSubmit(infosDoEvento){
            infosDoEvento.preventDefault();
            setCategorias([
              ...categorias,
              values
            ])

            clearForm();
          }}>
            <FormField
            label='Nome da Categoria'
            name='nome'
            type='text'
            value = {values.nome}
            onChange = {handleChange}
            />

            <FormField
            label='Descrição'
            name='descrição'
            type='textarea'
            value = {values.descrição}
            onChange = {handleChange}
            />

            <FormField
            label='Cor'
            name='cor'
            type='color'
            value = {values.cor}
            onChange = {handleChange}
            />


            <Button>
              Cadastrar
            </Button>

          </form>
          {categorias.length === 0 && (
          <div>
            {/*cargando*/}
            Loading...
          </div>
          )}

          <ul>
            {categorias.map((categoria) => {
              return (
                <li key={`${categoria.titulo}`}>
                  {categoria.titulo}
                </li>
              )
            })}
          </ul>

        <Link to='/'>
          Ir para Home
        </Link>
      </PageDefault>
    )
  }
=======

    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,
    //     {
    //       id: 1,
    //       nome: 'Front End',
    //       descricao: 'Uma categoria bacanudassa',
    //       cor: '#cbd1ff',
    //     },
    //     {
    //       id: 2,
    //       nome: 'Back End',
    //       descricao: 'Outra categoria bacanudassa',
    //       cor: '#cbd1ff',
    //     },
    //   ]);
    // }, 4 * 1000);
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        clearForm();
      }}
      >

        <FormField
          label="Nome da Categoria"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          {/* Cargando... */}
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}
>>>>>>> ec180bcffff187abac85494c8e378184944a8f97

export default CadastroCategoria;