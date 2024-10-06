import createHttpError from 'http-errors';

import * as contactServices from '../services/contacts.js';

export const getAllContactsController = async (req, res) => {
  const data = await contactServices.getAllContacts();

  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data,
  });
};

export const getContactsByIdController = async (req, res) => {
  const { contactId } = req.params;
  const contact = await contactServices.getContactById(contactId);

  if (!contact) {
    throw createHttpError(404, `Contacts with id=${contactId} not found`);
    //   const error = new Error(`Contacts with id=${contactId} not found`);
    //   error.status = 404;
    //   throw error;
    //   return res.status(404).json({
    //     message: 'Contact not found',
    //   });
  }

  res.status(200).json({
    status: 200,
    message: `Successfully found contact with id ${contactId}!`,
    data: contact,
  });
};
