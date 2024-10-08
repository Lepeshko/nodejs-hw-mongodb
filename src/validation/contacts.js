import Joi from 'joi';

import { contactTypeList, phoneNumberRegexp } from '../constants/contacts.js';

export const contactAddSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.string()
    .min(3)
    .pattern(phoneNumberRegexp)
    .max(20)
    .required(),
  email: Joi.string().min(3).max(50),
  isFavourite: Joi.boolean(),
  contactType: Joi.string()
    .valid(...contactTypeList)
    .min(3)
    .max(20)
    .required(),
});

export const contactPatchSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  phoneNumber: Joi.string().min(3).pattern(phoneNumberRegexp).max(20),
  email: Joi.string().min(3).max(50),
  isFavourite: Joi.boolean(),
  contactType: Joi.string()
    .valid(...contactTypeList)
    .min(3)
    .max(20),
});
