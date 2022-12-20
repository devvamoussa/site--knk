const asyncHandler = require('express-async-handler')


const Api = require('../models/newModel')
const User = require('../models/userModel')

//@desc  get api
//@router GET//api/goals
//@access private

const getApi = asyncHandler(async (req, res) =>{
    const api = await Api.find( { user: req.user.id } )

    res.status(200).json(api)
})


//@desc  set api
//@router POST //api/goals
//@access private

const setApi = asyncHandler(async (req, res) =>{
    if (!req.body.text) {
        res.status(400)
        throw new Error('please add a text filed')
    }
    const api = await Api.create({
        text: req.body.text,
        user: req.user.id,
        
    })
    //console.log(req.body)
    res.status(200).json(api)
})


//@desc  Update api
//@router PUT //api/goals:id
//@access private

const UpdateApi = asyncHandler(async (req, res) =>{
    const api = await Api.findById(req.params.id)

    if(!api){
        res.status(400)
        throw new Error('Api not found')
    }


    // verification si l'utilisateur existe 
    if (!req.user) {
        res.status(401)
        throw new Error('User no found')
        
    }


    // verification pour svoir si l'utilisteur connecte correspond a l' utilisateur 

    if(api.user.toString() !== req.user.id ){
        req.status(401)
        throw new Error('User no authorized')
    }

    const updatedApi = await Api.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedApi)
})


//@desc  delete api
//@router DELETE //api/goals:id
//@access private

const deleteApi = asyncHandler(async (req, res) =>{
    const api = await Api.findById(req.params.id)

    if(!api){
        res.status(400)
        throw new Error('Api not found')
    }


    // verification si l'utilisateur existe 
    if (!req.user) {
        res.status(401)
        throw new Error('User no found')
        
    }


    // verification pour svoir si l'utilisteur connecte correspond a l' utilisateur 
    if(api.user.toString() !== req.user.id ){
        req.status(401)
        throw new Error('User no authorized')
    }
    await api.remove()

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getApi,
    setApi,
    UpdateApi,
    deleteApi,
}

