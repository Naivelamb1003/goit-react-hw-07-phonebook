import axios from "axios";

import {
  fetchContactsSuccess,
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from "./phonebook-actions";

axios.defaults.baseURL = "http://localhost:4545";

export const addContact = (namber, telf) => (dispatch) => {
  const contact = {
    name: namber,
    number: telf,
  };

  dispatch(addContactRequest());

  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((error) => dispatch(addContactError(error.massage)));
};

export const deleteContacts = (Id) => (dispatch) => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${Id}`)
    .then(() => dispatch(deleteContactSuccess(Id)))
    .catch((error) => dispatch(deleteContactError(error.massage)));
};

export const fetchContacts = () => (dispatch) => {
  dispatch(fetchContactRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch((error) => dispatch(fetchContactError(error.massage)));
};

export default {
  addContact,
  deleteContacts,
  fetchContacts,
};
