import axios from "axios";
import { FOOD_API } from "../../config";

const foodApi = axios.create({
    baseURL: FOOD_API
})

export default foodApi