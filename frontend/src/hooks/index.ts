
import { useEffect, useState } from "react"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { DonorCardProps } from "../components/DonorCard"; // Adjust the import path as necessary


export interface Donar {
    map(arg0: (donar: DonorCardProps) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
    "email" :String ;
  "rollNo": String ;
  "name":String;
  "bloodType": String;
  "address": String;
  "lastDonation" :String;
  "contact" :String;
  "image" :String;
  "available" :Boolean;
  "id":String;
  
    }


export const useDonar= ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [donar, setDonar] = useState<Donar>();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/Donar/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                const data = response.data as { donar: Donar };
                setDonar(data.donar);
                setLoading(false);
            })
    }, [id])

    return {
        loading,
        donar
    }

}
export const useDonars = () => {
    const [loading, setLoading] = useState(true);
    const [donars, setDonars] = useState<Donar[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/donars/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                const data = response.data as { donars: Donar[] };
                setDonars(data.donars);
                setLoading(false);
            })
    }, [])

    return {
        loading,
        donars
    }
}