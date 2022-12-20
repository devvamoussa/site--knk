import axios from 'axios'

const API_URL=  'http://localhost:4000/api/goals/'

// create new artisan
const createArtisan = async (artisData, token)=> {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, artisData, config)
    
    return response.data
    
}
// get user artisan
const getArtisan = async (token)=> {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}


const artisanService = {
    createArtisan,
    getArtisan
}

export default artisanService