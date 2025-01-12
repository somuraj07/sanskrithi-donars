import Appbar from "../components/Appbar";
import { Spinner } from "../components/Spinner";
import { useDonar } from "../hooks";
import {useParams} from "react-router-dom";
import FullDonar from "../components/FullDonars";


export const Donar = () => {
    const { id } = useParams();
    const {loading, donar} = useDonar({
        id: id || ""
    });

    if (loading || !donar) {
        return <div>
            <Appbar />
        
            <div className="h-screen flex flex-col justify-center">
                
                <div className="flex justify-center">
                    <Spinner />
                </div>
            </div>
        </div>
    }
    return <div>
        <FullDonar donar={donar} />
    </div>
}