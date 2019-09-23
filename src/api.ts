import axios from 'axios';

export const getCivilizations = (): Promise<Swagger.CivilizationList> =>
    axios.get(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations`).then(response => response.data);
