import axiosAPI from './axiosAPI';

const productAPI = {
    getAll: (params) => {
        const url = 'https://5fa24ce2ba0736001613b6c3.mockapi.io/admin';
        return axiosAPI.get(url, {params});
    }
}

export default productAPI;