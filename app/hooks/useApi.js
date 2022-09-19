import { useState } from 'react';

export default useApi = (apiFct) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const request = async (...args) => {
    const res = await apiFct(...args);
    if (!res.ok) {
      setError(true);
      return setLoading(false);
    }

    setError(false);
    setLoading(false);
    setData(res.data);
  };

  return { data, error, loading, request};
};
