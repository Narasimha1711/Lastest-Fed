const { userInfo, userLogin, userRegister } = require('../controllers/userController.js');
const  { sellerInfo, sellerLogin, sellerSignup } = require('../controllers/sellerController.js')

const express = require('express');
const router = express.Router();



router.post('/login', userLogin);
router.post('/register', userRegister);
router.get('/user-info', userInfo)

router.post('/sellerSignup', sellerSignup)
router.post('/sellerLogin', sellerLogin)
router.get('/seller-info', sellerInfo)






// app.post('/sellerSignup', sellerSignup)

// app.post('/sellerLogin', )

// app.get('/seller-info', async (req, res) => {

//     const token = req.cookies.token;

//     if(!token) {
//         return res.status(400).json({message: "Login again", path: '/login'})
//     }

//     jwt.verify(token, secret, {}, async (err, data) => {
//         if(err) {
//             throw err;
//         }
//         // console.log(data)
//         const sellerDoc = await SellerModel.findOne({_id: data.id});

//         // console.log(sellerDoc)
//         return res.json(sellerDoc);
//     })
// })
// app.post('/login', )

// app.post('/register', )



// module.exports = router;
// export default router;
module.exports = router