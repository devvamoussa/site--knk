const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')





//@desc register new user
//@router post//api/users
//@access Public

const registerUser = asyncHandler(async (req, res) => {
    
    const { name, lasName, number, password , password2, email, newdate, genre} = req.body
     
        if(!name || !lasName ||  !number  || !password || !password2 || !number || !email || !newdate|| !genre ) {
            res.status(400)
            throw new Error('please add all fields')
        }
        //verification sur l'utilisateur existe

        const userExists = await User.findOne({email})
        if(userExists){
            res.status(400)
            throw new Error("l'utilisateur existe")
        }

        // cachée le code pour évité le piratage 

        const salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(password, salt)

        // creaction de l'utilisateur

        
        try {
            const user = await User.create({
            name,
            lasName,
            email : email,
            number,
            password: hashedpassword,
            password2: hashedpassword,
            newdate,
            genre
            
            

        })
            
         if(user) {
            res.status(201).json({
                _id: user.id,
                name: user.name,
                lasName: user.lasName,
                email: user.email,
                number: user.number,
                newdate: user.newdate,
                genre: user.genre,
                token: generateToken(user._id)
            })

            
            }
                else {
                res.status(400)
                throw new Error("l'enregistrement a échoué")
            }

           

        }catch (error) {
            error.message("échec de l'enregistrement de l'utilisateur")
            console.log(error.message)
        }
        
        //sendConfirmationEmail(User.email, User.activationCode)

        
       

       

})

//const verification =  asyncHandler(async (req, res) =>{
    

//}

//@desc authenticate a user
//@router POST//api/users/login
//@access Public

const loginUser = asyncHandler(async (req, res) =>{

    const {email, password} = req.body

    // verfication sur l'utilisateur existe 

    const user = await User.findOne({email})

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
           _id: user.id,
            name: user.name,
            lasName: user.lasName,
            email: user.email,
            password: user.password,
            number: user.number,
            token: generateToken(user._id)
        })
    }
    else{
        res.status(400)
        throw new Error('aucun utilisateur trouvé ')
    }
   

    //const passwordIsValid = bcrypt.compare(password, user.password);

    //if (!passwordIsValid) {
        //return res.send({
         //   accessToken: null,
         //   message: 'mot de passe incorrecte',
       //});
    //}

    //if (user && passwordIsValid && !user.isActive) {
       // return res.send({
        //    accessToken: null,
            //message: "veuillez verifier votre boite email pour l'activation",
        //});
    //}

})

//@desc Get user data
//@router GET//api/me
//@access Private

const getMe = asyncHandler(async (req, res) =>{

    res.status(200).json(
        req.user
    )
})

// generate JWT

const generateToken = (id) =>{
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe
};