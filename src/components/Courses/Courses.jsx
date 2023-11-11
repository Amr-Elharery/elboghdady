import "./Courses.css";
import PageHeading from "../PageHeading/PageHeading";
import Course from "../Course/Course";
import useFetch from "../../hooks/useFetch";
import Loader from "../Loader/Loader";


const Courses = () => {
    const {data, isLoading, error, reFetch} = useFetch("courses");

    return(
        <div className={"elements-container"}>
            <PageHeading text={"Courses"}/>

            <div className={"videos-holder"}>
                {
                    isLoading ?
                        <Loader />
                        :
                        error ?
                            reFetch()
                            :
                            data.map(v => (
                                <Course v={v} />
                            ))
                }
            </div>
        </div>
    )
}

export default Courses;