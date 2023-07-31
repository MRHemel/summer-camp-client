import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";


const SelectedClass = () => {
    const [cart, refetch] = useCart()
    // console.log(cart)
    const handleDelete = item => {
        // console.log(item)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item?._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCound > 0) {

                            Swal.fire(
                                'Deleted!',
                                'Your course has been deleted.',
                                'success'
                            )
                            refetch();
                        }
                    })
            }
        })
    }
    return (
        <div>
            <h2 className="text-center text-xl font-bold">selected courses: {cart.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-xl text-black">
                            <th>#</th>
                            <th>Name</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <td className="font-bold">
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.name}</div>

                                        </div>
                                    </div>
                                </td>
                                <td className="font-bold">
                                    {item.instructor}

                                </td>
                                <td className="font-bold">${item.price}</td>
                                <th className="flex flex-col gap-2">
                                    <button className="btn btn-primary w-1/2 mx-auto bg-green-700 hover:bg-green-600">Enroll</button>
                                    <button onClick={() => handleDelete(item)} className="btn btn-primary w-1/2 mx-auto bg-red-600 hover:bg-red-800">Delete</button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClass;