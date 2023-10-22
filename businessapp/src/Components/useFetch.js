import { useEffect, useState } from "react";

const useFetch=(url)=>
{
     
    let [Data,setData]=useState([]);

    useEffect(()=>
    {
       fetch(url)
       .then((temp)=> temp.json())
       .then((res)=> setData(res))
       .catch((e)=> console.log(e) )  
    },[url])
    return ([Data])






}
export default useFetch;