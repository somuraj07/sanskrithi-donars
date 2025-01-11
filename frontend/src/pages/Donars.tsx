

import { Appbar } from "../components/Appbar"

import { Donarcard } from "../components/DonorCard";
import { useDonars } from "../hooks";

export const Blogs = () => {
    const {  Donars } = useDonars();

    return <div>
        <Appbar />
        <div  className="flex justify-center">
            <div>
                {donars.map(donar => <Donarcard
                    id={donar.id}
                    name={donar.name}
                    email={donar.email}
                    rollNo={donar.rollNo}
                    bloodType={donar.bloodType}
                    address={donar.address}
                    lastDonation={donar.lastDonation}
                    contact={donar.contact}
                    image={donar.image}
                    available={donar.available}
               


                />)}
            </div>
        </div>
    </div>
}
