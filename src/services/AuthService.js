import HttpClient from "../utils/HttpClient";

class AuthService {
    constructor() {
        this.httpClient = new HttpClient({ baseURL: process.env.API_URL, headers: { algumacoisa: "teste" } });
    }

    login(usuario) {
        const res = this.httpClient.post(usuario);

        // salvar token, fazer login
    }

    registro(usuario) {
        debugger;
        const res = this.httpClient.post(usuario);
        debugger;
    }
}

export default AuthService;
