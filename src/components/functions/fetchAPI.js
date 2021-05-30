import axios from "axios";

const BASE_URL = "https://grupal-github-repo-hackathon.herokuapp.com";

async function callApi(endpoint, body, type) {
  if (!type) {
    type = "GET";
  } 
  let data = axios({
    method: type,
    url: BASE_URL + endpoint,
    data: body,
  }).then((x) => {
    console.log(x.data);
    return x.data.token
  }).catch(error => {
    let obj = {
      errorStatus: error.response.status,
      errorMsg: error.response.data
    }
    return obj;
  });
  return data;
}

const APIFetch = {
  API: {
    login(loginBody) {
      return callApi(`/api/user/login`, loginBody, 'POST');
    },
    register(registerBody) {
      //metodo de registro sin route
      return callApi(`/api/user/`);
    },
    read(url) {
      return callApi(url);
    },
  },
};

export default APIFetch;
