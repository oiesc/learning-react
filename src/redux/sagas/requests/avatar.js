import axios from 'axios'

export function requestGetAvatar() {
    return axios.request({
        method: "get",
        url: "https://my-json-server.typicode.com/oiesc/demo/avatar"
    });
}