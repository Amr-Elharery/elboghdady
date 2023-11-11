import './Exams.css';
import useFetch from "../../hooks/useFetch";
import PageHeading from "../PageHeading/PageHeading";
import Exam from "../Exam/Exam";
import Loader from "../Loader/Loader";

const Exams = ()=>{
    const {data, isLoading, error, reFetch} = useFetch("exams");
    return(
        <div className="elements-container">
            <PageHeading text={"My Exams"}/>

            <div className="exams-holder">
                {
                    isLoading ?
                        <Loader />
                        :
                        error ?
                            reFetch()
                            :
                            data.map(e => (
                                <Exam e={e}/>
                            ))
                }
            </div>
        </div>
    )
}

export default Exams;