// @desc get all contacts
// @routes get/api/contacts
// @access public
const User = require("../models/UserModel");
const Seller = require("../models/SellerModel");
const Medicine = require("../models/MedicineModel");
// get the info regarding all the contacts
const asyncHandler = require("express-async-handler");

const getUsers = asyncHandler(async (req, res) => {
  const user = await User.find();
  // if (!user) {
  //   res.status(404).json({ message: "No Users found" });
  // }
  console.log(user);
  res.status(200).json({ message: user, length1: user.length });

});
const getSellers = asyncHandler(async (req, res) => {
  const seller = await Seller.find();
  // if (!seller) {
  //   res.status(404).json({ message: "No sellers found" });
  // }
  console.log(seller.length);
  res.status(200).json({ message: seller, length2: seller.length });
});
const getMedicines = asyncHandler(async (req, res) => {
  const medicines = await Medicine.find();
  res.status(200).json({ message: medicines, length3: medicines.length });
});

// get the info regarding a particular contact with the given id.
// const getUser = asyncHandler(async (req, res) => {
//   // res
//   //   .status(200)
//   //   .json({ message: `information of id ${req.params.id} is found ` });
//   const user = await User.findById(req.params.id);
//   if (!user) {
//     res.status(404).json({ message: `No user found` });
//   }
//   res.status(200).json({ message: user });
// });

// create a contact info.
// const postUsers = asyncHandler(async (req, res) => {
//   console.log("the body of the request is :", req.body);
//   const { email, username, password } = req.body;
//   if (!email || !username || !password) {
//     res.status(400);
//     throw new Error("All the fields are mandatory");
//   }
//   const user = await User.create({
//     email,
//     username,
//     password,
//   });
//   res.status(201).json({ message: user });
// });

// // update the contact info the specified id.
const putUsers = asyncHandler(async (req, res) => {
  const user = User.findById(req.params.id);
  if (!user) {
    res
      .status(404)
      .json({ message: `No contact found with id ${req.params.id}` });
  }
  const  { name, email, password } = req.body;
  const UpdatedUsers = await User.findByIdAndUpdate(req.params.id, req.body, {
    name,email,password,
    new: true,
  });
  res.status(200).json({ message: UpdatedUsers });
});

// // delete the contact info of the specified id.
// const deleteUsers = asyncHandler(async (req, res) => {
//   const user = await User.findById(req.params.id);
//   if (!user) {
//     res
//       .status(404)
//       .json({ message: `No contact found with id ${req.params.id}` });
//   }
//   await user.deleteOne();
//   res.status(200).json({ user });
// });
module.exports = {
  getUsers,
  getSellers,
  getMedicines,
  putUsers,
  // postUsers,
  // putUsers,
  // deleteUsers,
  // getUser,
};
