import React from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';


    
  function CadastroVideo(){
    const {handleChange,values} = useForm({
  
  
    })
    
    return(
      <PageDefault>
          <h1>Cadastro de Video</h1>

          <form>
            <FormField
              label="Titulo do Video"
              name="titulo"
              value={values.titulo}
              onChange={handleChange}
            />
          </form>

        <Link to='/cadastro/categoria'>Cadastrar Categoria</Link>
      </PageDefault>
    )
  }

export default CadastroVideo;