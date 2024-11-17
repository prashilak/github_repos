import React, { useEffect, useState } from 'react'
import API from './API';


interface FetchData{
    data : [],
    isLoading: boolean,
    error : null
  }

  /**
   *
   * @param GODADDY_REPO node url
   * @returns data, loading state , error
   */
const useFetchData = (GODADDY_REPO:string):FetchData => {
    const [data,setData] = useState<any|[]>([]);
    const [isLoading, setIsLoading] =useState(false);
    const [error, setError]= useState(null);

    useEffect(()=>{
        const fetchData = async ()=>{
            setIsLoading(true);
            try {
                const response = await API.get(GODADDY_REPO);
                setData(response.data);
            } catch (error:any) {
                setError(error.message)
            }finally{
                setTimeout(() => {
                    setIsLoading(false);
                }, 500);
            }
        }

        fetchData()

    },[])
  return {data,isLoading, error}

}

export default useFetchData