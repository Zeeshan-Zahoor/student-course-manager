import axios from "axios";

const API = "http://localhost:5000/students";

export const addStudent = (data) => axios.post(`${API}/add`, data);
export const getStudents = () => axios.get(`${API}/all`);
export const addCourse = (data) => axios.post(`${API}/add-course`, data);

export const deleteStudent = (id) => axios.delete(`${API}/delete/${id}`);
export const updateStudent = (id, data) => axios.put(`${API}/update/${id}`, data);