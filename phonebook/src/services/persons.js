import axios from "axios";

const baseUrl = "https://phonebook-backend-fs.herokuapp.com/api/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const getOne = (id) => {
  const request = axios.get(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

const create = (newPerson) => {
  const request = axios.post(baseUrl, newPerson);
  return request.then((response) => response.data);
};

const update = (id, changedPerson) => {
  const request = axios.put(`${baseUrl}/${id}`, changedPerson);
  return request.then((response) => response.data);
};

const deletePerson = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

const personService = { getAll, getOne, create, deletePerson, update };

export default personService;
