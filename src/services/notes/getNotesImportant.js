import axios from "axios";

export const getNotesImportant = ()=> {
    return axios.get('https://notas-backend-production.up.railway.app/notes/important')
    .then((response) => () => {
        const { data } = response;
        return data
    })
}