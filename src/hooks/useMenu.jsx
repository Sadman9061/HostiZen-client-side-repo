import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";


const useMenu = () => {
    // const [menu, setMenu] = useState([]);
    // const [loading,setLoading]=useState(true)
    // useEffect(() => {
    //     fetch('https://hostizen-server-side.vercel.app/meals')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data)
    //             setLoading(false)
    //         })
    // }, [])
    // return [menu,loading]
    const { data: menu = [], isPending: loading } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axios.get('https://hostizen-server-side.vercel.app/meals');
            return res.data
        }
    })
    return [menu, loading]
};

export default useMenu;