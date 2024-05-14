import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const getQuestions = async () => {
    console.log('apiUrl: ', apiUrl);
    try {
     const data = await axios.get(`${apiUrl}/api/questions`)
     return data?.data;
    } catch (error) {
     console.error(error);
    }
 }

export const getGrid = async () => {
    try {
     const data = await axios.get(`${apiUrl}/api/grid`)
     return data?.data;
    } catch (error) {
     console.error(error);
    }
 }

export const updateAnswers = async (answers) => {
    try {
     const data = await axios.post(`${apiUrl}/api/answers`, {answers})
     return data?.data;
    } catch (error) {
     console.error(error);
    }
 }