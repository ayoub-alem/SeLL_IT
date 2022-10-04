import { create } from 'apisauce';
import authStorage from '../auth/storage';
import cache from '../utility/cache';

const apiClient = create({
  baseURL: 'http://192.168.43.111:9000/api',
  timeout: 5000,
});

apiClient.addAsyncRequestTransform(async (req) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  req.headers['x-auth-token'] = authToken;
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  if (data) console.log(data);
  return data ? { ok: true, data } : response;
};

export default apiClient;
