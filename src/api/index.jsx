import axios from "axios";

const URL = "http://localhost:5000";
axios.defaults.withCredentials = true;
export const fetchCourses = () => axios.get(`${URL}/courses`);
export const createCourses = (payload) => axios.post(`${URL}/courses`, payload);

// AUTH
export const postLogin = (payload) => axios.post(`${URL}/user/login`, payload);
export const register = (payload) =>
  axios.post(`${URL}/user/register`, payload);
// USER
export const fetchUser = (token) =>
  axios.get(`${URL}/user/infor`, { headers: { Authorization: token } });

export const fetchPracticeListen = () => axios.get(`${URL}/listen-topic`);

export const fetchLsCourse = ({ id }) =>
  axios.get(`${URL}/listen-topic/course/${id}`);
export const fetchLsPart = ({ id }) =>
  axios.get(`${URL}/listen-topic/part/${id}`);

//GRAMMAR
export const fetchGrammar = () => axios.get(`${URL}/grammar-topic`);
export const findTopicGrammar = ({ id }) =>
  axios.get(`${URL}/grammar-topic/${id}`);


// SAVE QUESTION IN EXAM
export const saveQuestion = (payload) =>
  axios.post(`${URL}/exam/save-question`, payload);
export const unSaveQuestion = (payload) =>
  axios.post(`${URL}/exam/unsave-question`, payload);
export const findStoreWord = ({id}) => axios.get(`${URL}/store/id_user/${id}`)
export const findStoreQuestion = ({idUser}) => axios.get(`${URL}/store/question/${idUser}`)

//NOTE
export const fetchNote = (token) => axios.get(`${URL}/note`, {headers: { Authorization: token }})
export const addNote = (payload, token) => axios.post(`${URL}/note/addNote`,payload, {headers: { Authorization: token }})
export const updateNote = (payload, token) => axios.post(`${URL}/note/updateNote`,payload, {headers: { Authorization: token }} )
export const removeNote = (payload, token) => axios.post(`${URL}/note/removeNote`,payload, {headers: { Authorization: token }} )

//SPEAK
export const fetchSpeakLesson = (type) => axios.get(`${URL}/speak/part/${type}`)
export const findSpeakQuestion = (id) => axios.get(`${URL}/speak/part_id/${id}`)
export const fetchSpeakGrammar = () => axios.get(`${URL}/speak/grammar`)
export const findSpeakGrammar = ({id}) => axios.get(`${URL}/speak/grammar/${id}`)

//WRITE
export const fetchWriteLesson = (type) => axios.get(`${URL}/write/part/${type}`)
export const findWriteQuestion = (id) => axios.get(`${URL}/write/part_id/${id}`)
export const fetchWriteGrammar = () => axios.get(`${URL}/write/grammar`)
export const findWriteGrammar = ({id}) => axios.get(`${URL}/write/grammar/${id}`)
