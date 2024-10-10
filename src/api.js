import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID UdW89KYVPCPUAVnVDRoGUvF2eKZ8nKqm1rZHXb1SaEI'
        },
        params: {
            query: term,
        },
    });
    return response.data.results;
};

export default searchImages;