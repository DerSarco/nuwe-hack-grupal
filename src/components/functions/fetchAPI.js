import axios from "axios";

const BASE_URL = "https://grupal-github-repo-hackathon.herokuapp.com";

async function callApi(endpoint, body, type, includeHeaders = false) {
  let config = null;

  if (!type) {
    type = "GET";
  }

  if (includeHeaders) {
    config = { Authorization: `Bearer ${localStorage.getItem('token')}` };
    
  }

  let data = axios({
    method: type,
    url: BASE_URL + endpoint,
    data: body,
    headers: config
  })
    .then((x) => {
      return x;
    })
    .catch((error) => {
      let obj = {
        errorStatus: error.response.status,
        errorMsg: error.response.data,
      };
      return {error: true, messages: obj};
    });
  return data;
}

const APIFetch = {
  API: {
    async login(loginBody) {
      let data = await callApi(`/api/user/login`, loginBody, "POST");
      if(data.error !== undefined){
        return data.messages;
      }
      let {token} = data.data;
      return token
    },
    async register(registerBody) {
      //metodo de registro sin route
      let data = await callApi(`/api/user/`, registerBody, "POST");
      if(data.error !== undefined){
        return data.messages;
      }
      return data
    },
    async getTeams(){
      let data = await callApi('/api/equipo',{},"GET")
      if( data.error !== undefined){
        return data.messages;
          }
      return data
    },
    async team(uri, addTeamBody) {
      //metodo de registro sin route
      let data = await callApi(uri, addTeamBody, "POST");
      if(data.error !== undefined){

        return data.messages;
      }
      return data
    },
    read(url, token) {
      return callApi(url, token, null, true);
    },
  },
};

export default APIFetch;
