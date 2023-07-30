import axios from "axios";

export const postNewNote = ({ date, content, important}) => {
    return axios
        .post('https://notas-backend-production.up.railway.app/notes', { date, content, important})
        .then((response) => {
            const { data } = response;
            return data;
        });
};