import { useState, useEffect } from 'react';
import axios from 'axios';

const  useUrlLoader = <T>(url: string, deps: any[] = []) =>{
  const [data, setData] = useState<T | null>(null);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    axios.get<T>(url).then((res) => {
      setData(res.data);
      setLoading(false)
    })
  },[url, ...deps])
  return [data, loading]
}

export default useUrlLoader;