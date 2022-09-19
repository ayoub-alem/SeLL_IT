import { create } from 'apisauce';

const apiClient = create({
  baseURL: 'http://192.168.43.111:9000/api',
  timeout: 10000,
});

export default apiClient;
