import { authAxios } from "@/util/http-commons";

const authApi = authAxios();
function login(id, password, success, fail) {
  authApi.post(`/users/login`, { id: id, password: password }).then(success).catch(fail);
}


export { login };
