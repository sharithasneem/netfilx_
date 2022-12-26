import axios from 'axios';
import {Baseurl} from './Components/const/const';
const instance = axios.create({
    Baseurl: Baseurl,
    
});
export default instance;