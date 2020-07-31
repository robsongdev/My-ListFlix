<<<<<<< HEAD
import config from '../config'

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`

function getAllWidthVideos(){
     return fetch(`${URL_CATEGORIES}?_embed=videos`)
      .then(async (respostaDoServidor)=> {
          
          if(respostaDoServidor.ok){
            const resposta = await respostaDoServidor.json();
            return resposta
        }

        throw new Error ('Nao foi possivel pegar os dados')

      });

    return config.URL_BACKEND_TOP;
}

export default{
    getAllWidthVideos,
}
=======
import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

export default {
  getAllWithVideos,
  getAll,
};
>>>>>>> ec180bcffff187abac85494c8e378184944a8f97
