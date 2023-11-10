import {useState, useEffect} from "react";

export default function useFetch (endpoint){
    // https://elboghdady-api.onrender.com/
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    async function getData(){
        setIsLoading(true)
        try{
            const res = await fetch(`https://elboghdady-api.onrender.com/${endpoint}`, {
                method:"GET",
                headers:{
                    "Content-Type": "application/json"
                }
            });
            const data = await res.json();
            setData(data);
        }
        catch (err){
            setError(err);
        }
        finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    const reFetch = ()=>{
        setIsLoading(true);
        getData();
    }

    return {data, isLoading, error, reFetch};

}