import axios from "axios";
import { useEffect, useState } from "react";


const useLikes = (likes) => {
    const [like,setLikes]=useState();
    useEffect(()=>{
        // Make the API request
    const response =  axios.get(`https://hostizen-server-side.vercel.app/commentsLikes?sortLikes=${likes ? 'asc' : 'desc'}`);

    // Update the state with the new data
    setLikes(response.data);
    },[likes])
    return [like];
};

export default useLikes;