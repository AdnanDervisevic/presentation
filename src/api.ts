import axios from 'axios';

export const getCivilizations = (): Promise<Swagger.CivilizationList> =>
    axios.get(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations`).then(response => response.data);

export const getUnits = (): Promise<Swagger.UnitList> =>
    axios.get(`https://age-of-empires-2-api.herokuapp.com/api/v1/units`).then(response => response.data);
