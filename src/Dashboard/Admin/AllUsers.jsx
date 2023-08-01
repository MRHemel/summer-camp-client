import { useQuery } from "@tanstack/react-query";
import { FaUsers, FaUserLock } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";



const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleMakeAdmin = user => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You want to make ${user.name} an Admin?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Make Admin!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/admin/${user._id}`, {
                    method: 'PATCH'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.modifiedCount) {
                            refetch()
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: `${user.name} is an Admin Now`,
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
            }
        })


    }
    const handleDelete = user => {

    }


    return (
        <div>
            <h1 className="text-3xl font-bold text-center"> Total Users:{users.length}</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Roll</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map((user, index) => (<tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td> {
                                        user.roll == 'admin' ? <><button className="btn btn-primary w-1/2 mx-auto bg-green-600 hover:bg-green-800"><FaUserLock></FaUserLock> Admin</button></> : <>
                                            <button onClick={() => handleMakeAdmin(user)} className="btn btn-primary w-1/2 mx-auto bg-orange-600 hover:bg-orange-800"><FaUsers></FaUsers> Student</button></>
                                    }</td>
                                    <td><button onClick={() => handleDelete()} className="btn btn-primary w-1/2 mx-auto bg-red-600 hover:bg-red-800">Remove</button></td>
                                </tr>))
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;