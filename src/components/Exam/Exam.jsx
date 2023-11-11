import  './Exam.css';
import {LiaBookmarkSolid} from "react-icons/lia";


const Exam = ({e}) => {
    const percentage = `${(e.userMarks / e.totalMarks) * 100}%`;

    return(
    <div className={"exam"}>
        <span className={"examId"}>
            {e.id}
        </span>

        <h3 className={"examTitle"}>
            {e.title}
        </h3>

        <div className={"progress"}>
            <span style={{width: percentage}}></span>
        </div>

        <div className={"exam-degree"}>
            You got {e.userMarks} from {e.totalMarks} in {e.title}.
        </div>

        <div className={"exam-notes"}>
            Notes: {e.notes}
            <LiaBookmarkSolid />
        </div>

        <div className={"exam-date"}>
            {e.date}
        </div>

    </div>
)}

export default Exam;