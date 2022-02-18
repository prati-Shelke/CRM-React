import crmURL from '../api'

const HttpServices = {
    get: async (query) => {
            const res = await crmURL.get(query);
            return res.data
        },
    post: async (query, datas) => {
        const res = await crmURL.post(query, datas);
        return res.data
    },
    put: async (query, id, datas) => {
        const res = await crmURL.put(`${query}/${id}`, datas);
        return res.data;
    },
    delete: async (query, id) => {
        await crmURL.delete(`${query}/${id}`);
    }
}

export default HttpServices;