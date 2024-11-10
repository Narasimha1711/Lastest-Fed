const express = require('express');
const connection = require('./config/DbConnection');
const UserDoc = require('./models/UserSchema');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();
const cookie = require('cookie');
const cookieParser = require('cookie-parser');
const SellerModel = require('./models/SellerSchema');
const MedicineModel = require('./models/Medicines');
const multer = require('multer');
const PORT = process.env.PORT || 9001;
const secret = 'thisissecret'
const path = require('path');
// const { userRouter } = require('./routes/userRoutes');
// import userRoutes from './routes/userRoutes.js'
const userRoutes = require('./routes/userRoutes.js')

connection();

app.use(express.json())

app.use(cors(corsOptions))

app.use(cookieParser())

app.use('/uploads', express.static('uploads'));


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Directory where images will be saved
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Give the file a unique name
    }
});

const upload = multer({ storage });



app.use('/', userRoutes)

// app.post('/login', async (req, res) => {
    
//     const { email, password } = req.body;
//     // console.log(req.body)

//     const isExistUser = await UserDoc.findOne({email: email});
    
//     if(isExistUser) {   
        
//         // const isCorrectPassword = bcryptjs.compareSync(password, isExistUser.password);
//         const isCorrectPassword = bcryptjs.compareSync(password, isExistUser.password);

//         if(isCorrectPassword) {

//             jwt.sign({email: isExistUser.email}, secret, {}, (err, token) => {

//                 if(err) {
//                     throw err;
//                 }

//                 res.cookie('token', token, {
//                     httpOnly: true,   // Prevents client-side JavaScript from accessing the cookie
//                     secure: false,    // Set to true in production if using HTTPS
//                     sameSite: 'Lax',  // Helps with CSRF protection
//                     maxAge: 5 * 60 * 1000 // 1 hour expiration
//                 });
//                 return res.status(200).json({message: "Login Successful", user: isExistUser})
//             })


//         }
//         else {
//             return res.status(401).json({message: "Password is incorrect. Please try again."});
//         }

//     }
//     else {
//         return res.status(402).json({message: "User didn't register"});
//     }
// })

// app.post('/register', async (req, res) => {
    
//     const { username, password, email } = req.body;
    
//     const existingUser = await UserDoc.findOne({email: email});
    
    
//     if(existingUser) {
//         return res.status(400).json({message: "User already exists."})
//     }
    
//     const hashedPassword = bcryptjs.hashSync(password, 10);
    
//     try {
//         const user = await UserDoc.create({
//             email,
//             username,
//             password: hashedPassword
//         })

//         return res.status(201).json({message: "User registered Successfully."})
//     }
//     catch(err) {
//         return res.status(500).json({ message: 'Server error. Please try again later.' });
//     }

// })


// app.get('/user-info', async (req, res) => {

//     const cookieData = req.cookies.token;
//     // console.log(cookieData)

//     if (!cookieData) {
//         return res.status(401).json({ message: "No token provided. Please log in.", path: "/login"});
//     }

//     jwt.verify(cookieData, secret, {}, async (err, userData) => {

//         if(err) {
//             throw err;
//         }
//         // console.log(userData);
//         const email = userData.email;
//         const userDoc = await UserDoc.findOne({email: email});
        
//         return res.status(200).json(userDoc)
        
//     })

//     // res.status(200).json(cookieData)
// })


// app.post('/sellerSignup', async (req, res) => {

//     const {email, shopName, password, location, gstin } = req.body;
//     try {

//         const hashedPassword = bcryptjs.hashSync(password, 10);
//         const sellerDoc = await SellerModel.create({ email: email, shopName: shopName, password: hashedPassword, location: location, gstin: gstin });
//         // console.log(sellerDoc)
//         return res.status(200).json({message: "Succesfully Created"})
//     }

//     catch(err) {
//         res.status(500).json({message: "Already Registered."})
//     }
// })

// app.post('/sellerLogin', async (req, res) => {

//     const { email, password } = req.body;

//     const isExistSeller = await SellerModel.findOne({email: email});

//     if(!isExistSeller) {

//         return res.status(402).json({message: "No Account Found."});
//     }   

    

//     const isCheck = bcryptjs.compareSync(password, isExistSeller.password);


//     if(isCheck) {

//         jwt.sign({id: isExistSeller._id, name: isExistSeller.shopName}, secret, {}, (err, token) => {
//             if(err) {
//                 throw err;
//             }
            
//             res.cookie('token', token, {
//                 httpOnly: true,   // Prevents client-side JavaScript from accessing the cookie
//                 secure: false,    // Set to true in production if using HTTPS
//                 sameSite: 'Lax',  // Helps with CSRF protection
//                 maxAge: 5 * 60 * 1000 // 1 hour expiration
//             });
//             return res.status(200).json({message: "Succesfully Created", seller: isExistSeller })
//         })

//     }
//     else {
//         return res.status(402).json({message: "Invalid Credentials."});
//     }
    
// })

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

app.get('/', async(req, res) => {
    console.log("HOllo")
    res.json({message: "HOllo"})
})

app.post('/addMedicine', upload.single('image'), async (req, res) => {

    
    const { medicineName, count, price, description, category, discount, discountedPrice } = req.body;
    const file = req.file;


    // console.log(file.path)
    // console.log(file.filename)
    // console.log(file)
    
    const tok = req.cookies.token;

    if(!tok) {
        return res.status(400).json({message: "Login again"});
    }

    let sellerId = "";
    let sellerName = "";

    jwt.verify(tok, secret, {}, async (err, data) => {
        
        if(err) {
            // throw err;
            return res.status(401).json({ message: "Session has expired. Login in." });
        }
        
        // return res.status(200).json(data);
        sellerId = data.id;
        sellerName = data.name
    })


    const SellerDoc = await SellerModel.findById({_id: sellerId});
    // const shopName = SellerDoc.shopName;
    const isPresent = await MedicineModel.findOne({name: medicineName, seller: sellerId, price })
    if(isPresent) {
        // isPresent.count += count;
        // await isPresent.save();
        return res.status(409).json({
            message: "Medicine with the same name and price already exists. You can change in Update Section",
            existingCount: SellerDoc.count
        });
    }
    else {

        const medicineDoc = await MedicineModel.create({ name: medicineName, seller: sellerId, count, price, discountedPrice, discount, description, image: file.filename, category, location: SellerDoc.location });
        
        await SellerModel.updateOne(
            { _id: sellerId },
            { $push: { medicinesUploaded: { _id: medicineDoc._id, medicine: medicineName , seller: sellerId, count, price, description, category, image: file.filename} } }
            );
        }
    // console.log(medicineName, shopName, count, price, description, file.filename, category)
    

    res.status(200);
    
})

app.post('/allMedicines', async (req, res) => {

    // console.log(req.body)
    const { searchItem } = req.body;
    // console.log(searchItem)
    try {

        const medicines = await MedicineModel.find({
            name: { $regex: searchItem, $options: 'i' } // 'i' makes it case-insensitive
        });
        // console.log(medicines)
        res.status(200).json(medicines);
        
    }

    catch(err) {
        console.log(err);
    }
})

app.post('/addToCart', async (req, res) => {

    const { id } = req.body;

    try {

        const medicine = await MedicineModel.findById(id);

        if(!medicine) {
            return res.status(400).json({message: "No Medicine Found"})
        }
        const token = req.cookies.token;

        jwt.verify(token, secret, {}, async(err, data) => {
            if(err) {
                return res.status(401).json({ message: "Session has expired. Login in." });
            }

            const userEmail = data.email;
            const userId = data.id;
            // console.log(data, "this");
            const User = await UserDoc.findOne({email: userEmail});
            // const User = await UserDoc.findById(userId)
            // console.log(User)
            const cartItems = User.cart;

            const isPresent = cartItems.filter((item) => item._id.toString() === id);
            // some method can also be used to check presence of item in array

            if(isPresent.length === 0) {

                await UserDoc.updateOne(
                    { email: userEmail },
                    { $addToSet: { cart: {  _id: medicine._id,
                        name: medicine.name,
                        seller: medicine.seller,
                        price: medicine.price,
                        description: medicine.description,
                        image: medicine.image }}}
                );
    
                    const doc = await UserDoc.findOne({email: userEmail});
                    // console.log(doc.cart)
                    res.status(200).json({message: "Added to cart", items: doc.cart});
            }
            else {
                res.status(200).json({message: "Item is already present in Cart"});
            }

        })

           
    }

    catch(err) {
        console.log(err);
        res.status(500).json({message: "Internal Server Error"})
    }
})

app.get('/addToCart', async (req, res) => {

    
    try {
        const token = req.cookies.token;

        jwt.verify(token, secret, {}, async(err, data) => {
            if(err) {
                return res.status(401).json({ message: "Session has expired. Login in." });
            }
            const userEmail = data.email;
            const doc = await UserDoc.findOne({email: userEmail});
            const arr = [];
            console.log(doc.cart)
            for(let i = 0; i < doc.cart.length; i++) {
                const id  = doc.cart[i]._id;
                const noo = await MedicineModel.findById(id);
                const foundItemCount = noo.count
                arr.push(foundItemCount);
            }
            // console.log(arr)
            console.log(doc.cart)
            res.status(200).json({message: "added to cart", items: doc.cart, itemsCount: arr});
        })
    }

    catch(err) {
        console.log(err);
        res.status(500).json({message: "Internal Server Error"})
    }
})

app.get('/inventory', async (req, res) => {

    const token = req.cookies.token;

    if(!token) {
        return res.status(401).json({message: "Login again"});
    }


    jwt.verify(token, secret, {}, async (err, data) => {

        if(err) {
            // throw err;
            return res.status(401).json({ message: "Session has expired. Login in." });
        }

        const sellerId = data.id;

        const SellerDoc = await SellerModel.findById(sellerId);
        // console.log(SellerDoc.medicinesUploaded)
        res.status(200).json(SellerDoc.medicinesUploaded);
    })

})

app.post('/sellerLogout', (req, res) => {
    res.cookie('token', '', { 
        httpOnly: true, 
        secure: false,  // Set to true in production if using HTTPS
        sameSite: 'Lax', 
        maxAge: 0       // Expire the cookie immediately
    });
    return res.status(200).json({message: "Successfully logged out"});
});



app.post('/buy', async (req, res) => {

    const { id } = req.body;

    try {

        const medicine = await MedicineModel.findById(id);

        if(!medicine) {
            return res.status(400).json({message: "No Medicine Found"})
        }
        const token = req.cookies.token;

        jwt.verify(token, secret, {}, async(err, data) => {
            if(err) {
                // throw err;
                return res.status(401).json({ message: "Session has expired. Login in." });
            }

            const userEmail = data.email;
            // console.log(data);

            await UserDoc.updateOne(
                { email: userEmail },
                { $addToSet: { booked: {  _id: medicine._id,
                    name: medicine.name,
                    seller: medicine.seller,
                    price: medicine.price,
                    description: medicine.description, }}}
            );

                const doc = await UserDoc.findOne({email: userEmail});
                // console.log(doc.booked)
                res.status(200).json({message: "Booked Item", items: doc.booked});
        })
    }

    catch(err) {
        console.log(err);
    }
})


app.post('/bookAllCart', async (req, res) => {

    const items = req.body;
    console.log(req.body)
    
    const token = req.cookies.token;

    if(!token) {
        return res.status(401).json({path: "/login"});
    }

    jwt.verify(token, secret, {}, async (err, data) => {

        if(err) {
            // throw err;
            return res.status(401).json({ message: "Session has expired. Login in." });
        }

        const email = data.email;

        const user = await UserDoc.findOne({email: email});
        // console.log(user)

        let accept = 1; 
        let notAcceptedItems = []
        for(let i = 0; i < items.length; i++) {
            const itemId = items[i]._id;
            const count = items[i].count
            const foundItem = await MedicineModel.findById(itemId);

            if(foundItem.count < count) {
                notAcceptedItems.push(items[i].name)
                accept = 0;
            }
            
        }

        if(accept === 1) {

            // const allCartItems = user.cart;
            const allCartItems = items;

            for(let i = 0; i < items.length; i++) {
                const itemId = items[i]._id;
                const count = items[i].count
                const foundItem = await MedicineModel.findById(itemId);
    
                // if(foundItem.count < count) {
                   foundItem.count -= count
                   await foundItem.save();
                // }
            }
            for(let i = 0; i < items.length; i++) {
                const sellerId = items[i].seller;
                const count = items[i].count
                const itemId = items[i]._id
                const seller = await SellerModel.findById(sellerId);
                const foundItem = seller.medicinesUploaded.find(m => m._id.toString() === itemId);
                // console.log("this")
                // console.log(foundItem);
                // if(foundItem.count < count) {
                   foundItem.count -= count
                   await seller.save();
                  console.log(foundItem)
                // }
            }
        
            await UserDoc.updateOne({email: email},
                {$push : {booked: allCartItems}})
                
                
                await UserDoc.updateOne(
                    { email: email },          
                    { $set: { cart: [] } }
                    );
                    return res.status(200).json({message: "Order Successfully Placed"});
                }
                else {

                    return res.status(200).json({message: "not Accept", items: notAcceptedItems})
                }
        

    })
})

app.post('/updateCount', async (req, res) => {

    const token = req.cookies.token;

    if(!token) {
        return res.status(200).json({path: "/login"});
    }

    jwt.verify(token, secret, {}, async (err, data) => {

        if(err) {
            // throw err;
            return res.status(401).json({ message: "Session has expired. Login in." });
        }

        const sid = data.id;

        // const user = await UserDoc.findOne({email: email});


        const { id, count } = req.body;

        const aa = await MedicineModel.updateOne({_id : id},
        {$set : {count: count}})
        
        const cc = await MedicineModel.findById({_id: id})
        // const seller = await SellerModel.findOne({email: email})

        const bb = await SellerModel.updateOne(
            { _id: sid, "medicinesUploaded._id": id },
            { $set: { "medicinesUploaded.$.count": count } }
        );
        console.log(count)
        console.log(cc)
        console.log(bb)
        res.status(200).json();
    })

    
})


app.get('/userPastOrders', async (req, res) => {

    const token = req.cookies.token;

    if(!token) {
        return res.status(200).json({path: "/login"});
    }

    jwt.verify(token, secret, {}, async (err, data) => {

        if(err) {
            // throw err;
            return res.status(401).json({ message: "Session has expired. Login in." });
        }

        const email = data.email;

        const user = await UserDoc.findOne({email: email});
        // console.log(user)
        const userPastOrders = user.booked;
        // console.log(userPastOrders)

        return res.status(200).json(userPastOrders);

    })
})


app.get('/userDashboard', async (req, res) => {

    const token = req.cookies.token;

    if(!token) {
        return res.status(200).json({path: "/login"});
    }

    jwt.verify(token, secret, {}, async (err, data) => {

        if(err) {
            // throw err;
            return res.status(401).json({ message: "Session has expired. Login in." });
        }

        const email = data.email;

        const user = await UserDoc.findOne({email: email});
        // console.log(user)
        const userPastOrdersLength = user.booked.length;
        console.log(userPastOrdersLength)

        return res.status(200).json({a: userPastOrdersLength});

    })
    
})


app.put('/userUpdatedetails', async (req, res) => {

    // const { username, emails, password } = req.body;

    const token = req.cookies.token;

    if(!token) {
        return res.status(200).json({path: "/login"});
    }

    jwt.verify(token, secret, {}, async (err, data) => {

        if(err) {
            // throw err;
            return res.status(401).json({ message: "Session has expired. Login in." });
        }
        console.log(req.body)
        const email = data.email;

        const updateFields = {};
            if (req.body.username) updateFields.username = req.body.username;
            if (req.body.password) updateFields.password = bcryptjs.hashSync(req.body.password, 10);
            if (req.body.email) updateFields.email = req.body.email;

            const us = await UserDoc.findOne({email: req.body.email});

            if(us) {
                return res.status(400).json({message: "Email is already registered"});
            }
            

        const user = await UserDoc.updateOne({email: email},{
            $set: updateFields 
        });
        // console.log(user)

        console.log("success");
      

        return res.status(200).json({message1: "Success"});

    })
})




app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
})