import axios from "axios";
export const base_url = "http://131.159.213.38:7030/";

export default axios.create({
    baseURL: base_url + "api/users",
    headers: {
        "Content-type": "application/json"
    }
});