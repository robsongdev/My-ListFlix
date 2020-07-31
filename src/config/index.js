const URL_BACKEND_TOP = window.location.hostname.includes('localhost')
? 'http://localhost:8080'
<<<<<<< HEAD
:'http://mylistflix.herokuapp.com';
=======
: 'https://mylistflix.herokuapp.com';
>>>>>>> ec180bcffff187abac85494c8e378184944a8f97

export default {
    URL_BACKEND_TOP,
}