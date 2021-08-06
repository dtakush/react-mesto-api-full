const router = require('express').Router();

const {
  getUsers,
  getIdUser,
  updateProfile,
  updateAvatar,
  getUserInfo,
} = require('../controllers/user');

const { userIdValidation, userInfoValidation, avatarValidation } = require('../middlewares/validation');

router.get('/', getUsers);
router.get('/me', getUserInfo);
router.get('/:userId', userIdValidation, getIdUser);
router.patch('/me', userInfoValidation, updateProfile);
router.patch('/me/avatar', avatarValidation, updateAvatar);

module.exports = router;
