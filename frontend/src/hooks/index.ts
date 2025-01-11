
import { useEffect, useState } from "react"
import axios from "axios";
import { BACKEND_URL } from "../config";


export interface Donar {
    "email" :String ;
  "rollNo": String ;
  "bloodType": String;
  "address": String;
  "lastDonation" :String;
  "contact" :String;
  "image" :String;
  "available" :Boolean;
  "id":String;
    }


export const useBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [donar, setDonar] = useState<Donar>();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/Donar/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                setDonar(response.data.donar);
                setLoading(false);
            })
    }, [id])

    return {
        loading,
        donar
    }

}
export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [donars, setDonars] = useState<Donar[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/donars/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                setDonars(response.data.donars);
                setLoading(false);
            })
    }, [])

    return {
        loading,
        donars
    }
}