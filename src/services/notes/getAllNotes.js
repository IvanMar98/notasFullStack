import axios from "axios";

export const getAllNotes = () => {
    return axios.get('https://notas-backend-production.up.railway.app/notes')
    .then((response) => {
        const { data } = response;
        return data;
    })
};