import GlobalService from "../util/GlobalService";

async function loginUser(email, password) {
  const postData = {
    username: email,
    password: password,
    role: "ROLE_CUSTOMER",
  };

  // const url = `http://192.168.1.8:9191/login/`;
  // console.log(postData);
  // console.log(url);
  // const response = await axios.post(url, postData);

    console.log(postData)

    var childURL = "login/";

    const response = await GlobalService.hitPostService({
      childURL: childURL,
      postData: postData,
    });

    console.log("Is the response correct");
  console.log(response);

  return response.data;
}

const LoginController = { loginUser };
export default LoginController;
