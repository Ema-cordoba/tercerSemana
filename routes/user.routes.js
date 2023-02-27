const { Router } = require('express');
const { check } = require('express-validator');
const { createUser } = require('../controllers/auth.controller');
const {
  findAllUsers,
  findOneUser,
  updateUser,
  deleteUser,
} = require('../controllers/user.controllers');
const { protectAccountOwner } = require('../middlewares/auth.middleware');
const {
  validIfExistUser,
  validIfExistUserEmail,
} = require('../middlewares/user.middleware');
const {
  updatePasswordUserValidation,
  validateFields,
} = require('../middlewares/validations.middleware');

const router = Router();

router.get('/', findAllUsers);

router.get('/:id', findOneUser);

router.post('/', createUser);

router.patch(
  '/:id',
  updateUser,
  updatePasswordUserValidation,
  validateFields,
  validIfExistUserEmail,
  protectAccountOwner,
  updatePasswordUserValidation
);

router.delete('/:id', deleteUser);

module.exports = {
  userRouter: router,
};
