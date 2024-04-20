import { useEffect, useState } from "react";


function useFetch(fetch_url){
    const [allData, setAllData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null)

    useEffect(() => {
        fetch(fetch_url)
        
        .then(response => {
            console.log(response)
            if(!response.ok){
                throw Error ("Could not fetch the data")
            }

            return response.json()
        })

        .then(data => {
            setLoading(false)
            setAllData(data)
        
        })

        .catch(error => {
            setLoading(false)
            setError(error.message)
        })
    },[fetch_url])

    
    return {allData, loading, error}

}

export default useFetch