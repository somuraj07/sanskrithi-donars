

// import Appbar from "../components/Appbar"

// import { Donarcard } from "../components/DonorCard";
// import { useDonar } from '../hooks/index'

// import { DonorCardProps } from '../types/DonorCardProps';

// export const Donars = () => {
//     const { loading, donar } = useDonar();
    
//     return <div>
//         <Appbar />
//         <div  className="flex justify-center">
//             <div>
//                 {!loading && donar && donar.map((donar: DonorCardProps) => <Donarcard
//                     id={donar.id}
//                     name={donar.name}
//                     email={donar.email}
//                     rollNo={donar.rollNo}
//                     bloodType={donar.bloodType}
//                     address={donar.address}
//                     lastDonation={donar.lastDonation}
//                     contact={donar.contact}
//                     image={donar.image}
//                     available={donar.available}
               


//                 />)}
//             </div>
//         </div>
//     </div>
// }

import Appbar from "../components/Appbar";
import { Donarcard } from "../components/DonorCard";
import { useDonar } from '../hooks/index';

export const Donars = () => {
    const { loading, donar } = useDonar({ id: "" });
console.log('Donor data:', donar);
    

    
    if (loading) {
        return (
            <div>
                <Appbar />
                <div>
                    <div>Loading donors...</div>
                </div>
            </div>
        );
    }
    
    // Safe guard against undefined or null donor data
    const donors = Array.isArray(donar) ? donar : [];
    
    if (donors.length === 0) {
        return (
            <div>
                <Appbar />
                <div>
                    <div>No donors found.</div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Appbar />
            <div>
                <div>
                    {donors.map((donor) => {
                        // Check if donor and donor.name exist
                        if (!donor || !donor.name) {
                            return null;
                        }
                        
                        return (
                            <Donarcard
                                name={donor.name || 'Unknown'}
                                email={donor.email || ''}
                                rollNo={donor.rollNo || ''}
                                bloodType={donor.bloodType || ''}
                                address={donor.address || ''}
                                lastDonation={donor.lastDonation || ''}
                                contact={donor.contact || ''}
                                image={donor.image || ''}
                                available={donor.available || false} donar={undefined} id={""}                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Donars;