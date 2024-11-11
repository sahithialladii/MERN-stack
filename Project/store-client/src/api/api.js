
import axios from 'axios'


const API = 'http://localhost:3000'

// ProductEndPonts
const getProducts = () => axios.get(`${API}/products/all`)




// OrderEndPonts
const getOrders = () => axios.get(`${API}/orders/all`)


//UserEndPoints
const getUsers = () => axios.get(`${API}/users/all`)

//AuthEndponts
const Login = (data) => axios.post(`${API}/auth/login`, data)
//add products
const AddProduct=(data1)=>axios.post(`${API}/products/add`,data1)
const Register=(newdata)=>axios.post(`${API}/auth/register`,newdata)
export { getProducts, getOrders, getUsers, Login,AddProduct,Register }