const express = require("express");
// users, sellers,medicines
const {
  getUsers,
  getSellers,
  getMedicines,
  putUsers,
} = require("../controllers/Controller");
const router = express.Router();

router.route("/users").get(getUsers);
router.route("/users/:id").put(putUsers);
router.route("/sellers").get(getSellers);
router.route("/medicine").get(getMedicines);
//router.route("/:id").get(getUser).get(getSeller).get(getMedicine);
module.exports = router;
