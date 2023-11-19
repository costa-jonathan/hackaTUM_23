import http from "../http-common"

class LoginService{

    existsUsername(params) {
        return http.get("/existsUsername", {params})
    }

    isPasswordCorrect(params){
        return http.get("/password", {params})
    }
}

export default new LoginService();