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

axios.defaults.baseURL = "http://localhost:4545";

const isContactNew = (state, name) => {
  if (state.map((c) => c.name.toLowerCase()).includes(name.toLowerCase())) {
    throw new Error("Contact already exist");
  }
  return true;
};

export const addContact = (number, telf) => async (dispatch, getState) => {
  const contact = {
    name: number,
    number: telf,
  };

  dispatch(addContactRequest());

  try {
    if (isContactNew(getState().phonebook.contacts, contact.name)) {
      const response = await axios.post("/contacts", contact);
      dispatch(addContactSuccess(response.data));
    }
  } catch (error) {
    dispatch(addContactError(error.message));
  }
};

export const deleteContacts = (Id) => (dispatch) => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${Id}`)
    .then(() => dispatch(deleteContactSuccess(Number(Id))))
    .catch((error) => dispatch(deleteContactError(error.message)));
};

export const fetchContacts = () => (dispatch) => {
  dispatch(fetchContactRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch((error) => dispatch(fetchContactError(error.message)));
};

const contactsOperations = { fetchContacts, addContact, deleteContacts };

export default contactsOperations;
