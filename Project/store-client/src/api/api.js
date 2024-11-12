import axios from 'axios'


const API = 'http://localhost:3000'

// ProductEndPonts
const getProducts = () => axios.get(`${API}/products/all`)
const addProduct = (product) => axios.post(`${API}/products/add`, product)
const deleteProduct=(id)=>axios.delete(`${API}/products/delete/${id}`)
const editProduct=(id)=>axios.put(`${API}/products/edit/${id}`)

// OrderEndPonts
const getOrders = () => axios.get(`${API}/orders/all`)
const addOrder=(order) =>axios.post(`${API}/orders/add`,order)


//UserEndPoints
const getUsers = () => axios.get(`${API}/users/all`)

//AuthEndponts
const Login = (credentials) => axios.post(`${API}/auth/login`, credentials)
const Register = (credentials) => axios.post(`${API}/auth/register`, credentials)

export { getProducts, getOrders,addOrder, getUsers, Login, Register, addProduct,deleteProduct,editProduct }