import * as React from "react";
import { useEffect, useState } from 'react'
import API from './API';


interface FetchData<T>{
    data : T|null,
    isLoading: boolean,
    error : null
  }

  /**
   *
   * @param GODADDY_REPO node url
   * @returns data, loading state , error
   */
const useFetchData = <T,>(GODADDY_REPO:string):FetchData<T> => {
    const [data,setData] = useState<T|null>(null);
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