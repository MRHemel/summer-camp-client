import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAdmin from "../hooks/useAdmin";

const ClassCard = ({ course }) => {
    const { name, instructor, seats, price, image, _id } = course
    const [isAdmin] = useAdmin()
    const { user } = useContext(AuthContext)
    const [disabled, setDisabled] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const handleSelect = () => {
        // console.log(item)
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
                    navigate('/login', { state: { from: location } })
                }
            })

        } else {
            const courseItem = { courseId: _id, name, instructor, price, image, email: user.email }
            fetch('https://b712-summer-camp-server-side-chi.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(courseItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Course has been added',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
            setDisabled(true)

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
                    {
                        isAdmin ? <button disabled={true} className="btn btn-primary" >Select</button> : <button disabled={seats === 0 || disabled} className="btn btn-primary" onClick={() => handleSelect(course)}>Select</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default ClassCard;