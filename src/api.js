import axios from 'axios'
//const accessToken= process.env.REACT_APP_ACCESS_TOKEN

const crmURL =axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    // headers: {
    //     "x-access-token":`${accessToken}`
    //    }
})

export default crmURL;