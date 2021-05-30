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
      console.log(x.data);
      return x.data;
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
      let {token} = data;
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
    async addCreditCard(cardBody){
      let data = await callApi('/api/card', cardBody, "POST", true);
      if(data.error !== undefined){
        return data.messages;
      }
      return data;
    },
    async getCard() {
      let data = await callApi('/api/card/', null, "GET", true);
      if(data.error !== undefined){
        return data.messages;
      }
      return data;
    },
    read(url) {
      return callApi(url);
    },
  },
};

export default APIFetch;
