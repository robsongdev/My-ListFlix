<<<<<<< HEAD
import {useState} from 'react';

function useForm(valoresIniciais){
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
  
    function clearForm(){
      setValues(valoresIniciais)
    }
  
    return {
      values,
      handleChange,
      clearForm,
    }
  
  };

  export default useForm;
=======
import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    // chave: nome, descricao, bla, bli
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
>>>>>>> ec180bcffff187abac85494c8e378184944a8f97
