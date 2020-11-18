import axios from "axios";
import { API_ROOT } from '../constans';

// Define a query function that will receive the query key
async function defaultQueryFn(apiName, apiPath) {
  const { data } = await axios.get(`${API_ROOT}/oms/${apiPath}`) // the testing url
  return data
}
export default defaultQueryFn;