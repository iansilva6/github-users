import axios from 'axios';

class Axios {
    constructor() {
        this.baseURL = 'https://api.github.com/';
        this.token = axios.create({
            baseURL: this.baseURL,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        this.HttpGet = this.HttpGet.bind(this);
        this.HttpPost = this.HttpPost.bind(this);
        this.HttpPut = this.HttpPut.bind(this);
        this.HttpPatch = this.HttpPatch.bind(this);
        this.HttpDelete = this.HttpDelete.bind(this);
        this.setToken = this.setToken.bind(this);
    }

    HttpGet(url) {
        return this.token.get(url);
    }

    HttpPost(url, model) {
        return this.token.post(url, model);
    }

    HttpPut(url, model) {
        return this.token.put(url, model);
    }

    HttpPatch(url, model) {
        return this.token.patch(url, model)
    }

    HttpDelete(url) {
        return this.token.delete(url);
    }
}

const instance = new Axios();

export default instance;

