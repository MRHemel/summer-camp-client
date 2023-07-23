import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ClassCard = ({ course }) => {
    const { name, instructor, seats, price, image } = course
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSelect = () => {
        if (!user) {
            Swal.fire({
                title: 'You are not logged in!!!!!',
                text: "You need to log in to select course.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            })

        }
    }
    return (
        <div className={`card w-96 ${seats == 0 ? 'bg-red-500' : 'bg-base-100'} shadow-xl`}>
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Instructor name:{instructor}</p>
                <p>Seats:{seats}</p>
                <p>Price:${price}</p>
                <div className="card-actions">
                    <button disabled={seats === 0} className="btn btn-primary" onClick={handleSelect}>Select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;