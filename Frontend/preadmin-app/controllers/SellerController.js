// // @desc get all contacts
// // @routes get/api/contacts
// // @access public
// const Seller = require("../models/SellerModel");
// // get the info regarding all the contacts
// const asyncHandler = require("express-async-handler");

// const getSellers = asyncHandler(async (req, res) => {
//   const seller = await Seller.find();
//   if (!seller) {
//     res.status(404).json({ message: "No sellers found" });
//   }
//   res.status(200).json({ message: seller, length: ` ${seller.length}` });
// });
// // get the info regarding a particular contact with the given id.
// const getSeller = asyncHandler(async (req, res) => {
//   // res
//   //   .status(200)
//   //   .json({ message: `information of id ${req.params.id} is found ` });
//   const seller = await Seller.findById(req.params.id);
//   if (!seller) {
//     res.status(404).json({ message: `No seller found` });
//   }
//   res.status(200).json({ message: seller });
// });

// // create a contact info.
// // const postSellers = asyncHandler(async (req, res) => {
// //   console.log("the body of the request is :", req.body);
// //   const { email, shopName, password } = req.body;
// //   if (!email || !username || !password) {
// //     res.status(400);
// //     throw new Error("All the fields are mandatory");
// //   }
// //   const seller = await Seller.create({
// //     email,
// //     username,
// //     password,
// //   });
// //   res.status(201).json({ message: user });
// // });

// // // update the contact info the specified id.
// // const putUsers = asyncHandler(async (req, res) => {
// //   const user = Connect.findById(req.params.id);
// //   if (!user) {
// //     res
// //       .status(404)
// //       .json({ message: `No contact found with id ${req.params.id}` });
// //   }
// //   const UpdatedUsers = await User.findByIdAndUpdate(req.params.id, req.body, {
// //     new: true,
// //   });
// //   res.status(200).json({ message: UpdatedUsers });
// // });

// // // delete the contact info of the specified id.
// // const deleteUsers = asyncHandler(async (req, res) => {
// //   const user = await User.findById(req.params.id);
// //   if (!user) {
// //     res
// //       .status(404)
// //       .json({ message: `No contact found with id ${req.params.id}` });
// //   }
// //   await user.deleteOne();
// //   res.status(200).json({ user });
// // });
// module.exports = {
//   getSellers,
//   //   postUsers,
//   //   putUsers,
//   //   deleteUsers,
//   getSeller,
// };
