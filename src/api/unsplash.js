import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID wMA7wU4o_MtZlXbF7bRk7RdVk-IsgCMvgmaRoJmpRQs',
    },
})