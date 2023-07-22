import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import InstructorCard from "../Components/InstructorCard";
import { useEffect, useState } from "react";


const instructors = () => {
    const [instructors, setInstructors] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => {
                setInstructors(data)
            })
    }, [])
    return (
        <div>
            <Helmet>
                <title>World Language||Instructors</title>
            </Helmet>
            <div className='mt-20'>
                <Fade delay={500} direction='up'>
                    <h1 className='text-center lg:text-5xl font-bold mb-10 border-y-8 p-8'>Popular Instructors</h1>
                </Fade>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {instructors.map((instructor) => (
                    <InstructorCard key={instructor._id}
                        instructor={instructor}></InstructorCard>
                ))}
            </div>

        </div>
    );
};

export default instructors;