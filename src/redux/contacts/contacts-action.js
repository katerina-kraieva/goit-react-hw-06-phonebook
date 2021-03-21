import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';
import contactsTypes from './contacts-types';

const addContact = createAction(contactsTypes.ADD, (nam, tel) => {
  return {
    payload: {
      id: shortid.generate(),
      name: nam,
      number: tel,
    },
  };
});

const deleteContact = createAction(contactsTypes.DELETE);

const changeFilter = createAction(contactsTypes.CHANGE_FILTER);

const contactsActions = { addContact, deleteContact, changeFilter };
export default contactsActions;