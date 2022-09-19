import { create } from 'apisauce';

const apiClient = create({
  baseURL: 'http://192.168.137.109:9000/api',
  timeout: 4000,
});

export default apiClient;
