import React, {useState,useEffect} from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button/';
import useForm from '../../../hooks/useForm';




function CadastroCategoria(){

  const valoresIniciais = {
    nome: '',
    descrição:'',
    cor: ''
  }
    
  
  const {handleChange,values, clearForm} = useForm(valoresIniciais)
  const [categorias, setCategorias] = useState([])
    
    
    

    useEffect(()=>{
    const URL_TOP = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080/categorias'
    :'http://mylistflix.herokuapp.categorias';
    fetch(URL_TOP)
      .then(async (respostaDoServidor)=> {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
      
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

export default CadastroCategoria;