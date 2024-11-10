const SellerModel = require('../models/SellerSchema');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = 'thisissecret'


const sellerSignup = async (req, res) => {

    const {email, shopName, password, location, gstin } = req.body;
    try {

        const hashedPassword = bcryptjs.hashSync(password, 10);
        const sellerDoc = await SellerModel.create({ email: email, shopName: shopName, password: hashedPassword, location: location, gstin: gstin });
        // console.log(sellerDoc)
        return res.status(200).json({message: "Succesfully Created"})
    }

    catch(err) {
        res.status(500).json({message: "Already Registered."})
    }
}

const sellerLogin = async (req, res) => {

    const { email, password } = req.body;

    const isExistSeller = await SellerModel.findOne({email: email});

    if(!isExistSeller) {

        return res.status(402).json({message: "No Account Found."});
    }   

    

    const isCheck = bcryptjs.compareSync(password, isExistSeller.password);


    if(isCheck) {

        jwt.sign({id: isExistSeller._id, name: isExistSeller.shopName}, secret, {}, (err, token) => {
            if(err) {
                throw err;
            }
            
            res.cookie('token', token, {
                httpOnly: true,   // Prevents client-side JavaScript from accessing the cookie
                secure: false,    // Set to true in production if using HTTPS
                sameSite: 'Lax',  // Helps with CSRF protection
                maxAge: 5 * 60 * 1000 // 1 hour expiration
            });
            return res.status(200).json({message: "Succesfully Created", seller: isExistSeller })
        })

    }
    else {
        return res.status(402).json({message: "Invalid Credentials."});
    }
    
}



const sellerInfo = async (req, res) => {

    const token = req.cookies.token;

    if(!token) {
        return res.status(400).json({message: "Login again", path: '/login'})
    }

    jwt.verify(token, secret, {}, async (err, data) => {
        if(err) {
            throw err;
        }
        // console.log(data)
        const sellerDoc = await SellerModel.findOne({_id: data.id});

        // console.log(sellerDoc)
        return res.json(sellerDoc);
    })
}

// export { sellerSignup, sellerLogin, sellerInfo }

module.exports = { sellerSignup, sellerLogin, sellerInfo }