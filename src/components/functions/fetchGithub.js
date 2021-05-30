import axios from 'axios';

async function callApi(endpoint = {}) {  
    let data = axios.get(endpoint).then(x => {
      console.log(x.data)
      return x.data
    })
    return data;
  }

  const githubFetch = {
    github: {
      readUser(user) {
        return callApi(`https://api.github.com/users/${user}`);
      },
      read(url) {
        return callApi(url);
      },
    },
  };
  
  export default githubFetch;
  