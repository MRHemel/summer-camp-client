import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import ClassCard from "../Components/ClassCard";


const classes = () => {
    const courses = useLoaderData()
    return (
        <div>
            <Helmet>
                <title>World Language||Classes</title>
            </Helmet>
            <div className='mt-20'>
                <Fade delay={500} direction='up'>
                    <h1 className='text-center lg:text-5xl font-bold mb-10 border-y-8 p-8'>Popular Courses</h1>
                </Fade>
            </div>
            <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {
                    courses.map(course => (
                        <ClassCard
                            key={course._id}
                            course={course}></ClassCard>
                    ))
                }
            </div>
        </div>
    );
};

export default classes;