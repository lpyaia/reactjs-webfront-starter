import frontendApi from "../utils/FrontEndApi";

class AuthService {
    constructor() {}

    login(usuario) {
        const res = this.httpClient.post(usuario);

        // salvar token, fazer login
    }

    registro(usuario) {
        return frontendApi.post("/registro", usuario);
    }
}

export default AuthService;
