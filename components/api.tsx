import axios from "axios";
import { apiUrl} from './variables'

export default function api() {
  return axios.create({
    baseURL: apiUrl,
  });
}