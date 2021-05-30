
const checkToken = () => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      return true;
    }
    return false;
};

const returnToken = () => {
  const token = localStorage.getItem("token");
  console.log(token);
  if (!token) {
    return false;
  }
  return token;
};

const authValidation = {
  validate: {
    verifyToken() {
    return checkToken()
    },
    returnTokenForReq() {
      return returnToken();
    },
  },
};

export default authValidation;
