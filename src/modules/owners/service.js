import axios from "axios";
import CONSTANTS from "../../common/constants";

export const getOwners = () => {
  return axios.get(`${CONSTANTS.url}/owners`);
}

export const addOwner = (owner) => {
  return axios.post(`${CONSTANTS.url}/owners/add`, owner);
}

export const updateOwner = (id, updatedOwner) => {
  return axios.patch(`${CONSTANTS.url}/owners/update/${id}`, updatedOwner);
}

export const deleteOwner = (id) => {
  return axios.delete(`${CONSTANTS.url}/owners/delete/${id}`);
}
