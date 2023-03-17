import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://api.sfd.interview.ovckd.dev/v1';

const useAxios = ({ url, method, body = null }) => {
    let config = {
        headers: {
            "Authorization": "1251a1de9906a858d1fc697792a5f5a7065a5fe984a159b1d3c3bbea160aa39b",
        }
    }
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fetchData = () => {
        axios[method](url, config, JSON.parse(body))
            .then((res) => {
                setResponse(res.data);
            })
            .catch((err) => {
                setError(err);
                toast.error(`${err.message}`)
            })
            .finally(() => {
                setloading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, [method, url, body]);

    return { response, error, loading };
};

export default useAxios;