import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

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
            type='text'
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


            <button>Cadastrar</button>

          </form>

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