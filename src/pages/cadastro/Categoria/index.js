import React, {useState,useEffect} from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button/';

function CadastroCategoria(){

  const valoresIniciais = {
    nome: '',
    descrição:'',
    cor: ''
  }
    
  
  const [categorias, setCategorias] = useState([])
  const [values, setValues] = useState(valoresIniciais);
    
    
    function setValue(chave,valor){
      //chave: nome, descrição, bla, bli
      setValues({
        ...values,
        [chave]: valor //nome:valor
      })
    }

    function handleChange(infosDoEvento) {
      setValue(
        infosDoEvento.target.getAttribute('name'),
        infosDoEvento.target.value
      )
    }

    useEffect(()=>{
    const URL_TOP = 'http://localhost:8080/categorias';
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

            setValues(valoresIniciais)
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
            {categorias.map((categorias, indice) => {
              return (
                <li key={`${categorias}${indice}`}>
                  {categorias.nome}
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