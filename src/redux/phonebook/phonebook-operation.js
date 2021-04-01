import axios from "axios";

import {
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

axios.defaults.baseURL = "http://localhost:4040";

export const addContact = (namber, telf) => (dispatch) => {
  const contact = {
    name: namber,
    number: telf,
  };

  dispatch(addContactsRequest());

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

export default {
  addContact,
  deleteContacts,
};
