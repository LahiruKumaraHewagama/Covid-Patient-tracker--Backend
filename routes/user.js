const router = require("express").Router();
const {
  createUser,
  loginUser,
  getUserProfile,
  editUserProfile,
  changePassword,
  submitNbooking,
} = require("../controller/userController");
const { checkToken, setUserIfLoggedIn } = require("../auth/token_validation");

router.post("/signup", createUser);
router.post("/signin", loginUser);

router.get("/profile", checkToken, getUserProfile);

router.post("/editprofile", checkToken, setUserIfLoggedIn, editUserProfile);
router.post("/changepassword", checkToken, setUserIfLoggedIn, changePassword);

router.post("/bookseat", setUserIfLoggedIn, submitNbooking);

module.exports = router;
