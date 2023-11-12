import PageHeading from "../PageHeading/PageHeading";
import useFetch from "../../hooks/useFetch";
import Loader from "../Loader/Loader";
import Question from "../Question/Question";

import './Questions.css';
const Questions = ()=> {
    const {data, isLoading, error, reFetch} = useFetch("questions");
    return(
        <div className={"elements-container"}>
            <PageHeading text={"Questions"}/>

            <div className={"questions-holder"}>
                {
                    isLoading ?
                        <Loader />
                        :
                        error ?
                            reFetch()
                            :
                            data.map(q => (
                                <Question q={q} />
                            ))

                }
            </div>
        </div>
    )
}

export default Questions;