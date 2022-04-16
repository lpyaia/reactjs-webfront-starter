import HttpClient from "./HttpClient";

class FrontEndApi extends HttpClient {
    constructor() {
        super({ baseURL: "", headers: { algumacoisa: "teste" } });
    }
}

export default FrontEndApi;
