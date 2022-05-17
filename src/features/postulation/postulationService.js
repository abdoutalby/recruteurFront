import axios from "axios";

const API_URL = "http://localhost:5000/api/postulations";

// Get all
const getAll = async() => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Delete
const deleteById = async(Id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.delete(API_URL + Id, config);

    return response.data;
};

const changeStatus = async(id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.put(API_URL + id, config);
    return response.data;
};

const postulationService = {
    getAll,
    deleteById,
    changeStatus,
};

export default postulationService;