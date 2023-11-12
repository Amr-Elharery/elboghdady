import './Question.css';

const Question = ({q})=>(
    <div className={"question"}>
        <span>
            {q.id}
        </span>

        <div className={"question-author"}>
            By: {q.author}
        </div>

        <div className={"question-question"}>
            Question: <span>{q.question}</span>
        </div>

        <div className={"question-answer"}>
            Answer: <span>{q.answer}</span>
        </div>

        <div className={"question-assistant"}>
            Answered By: {q.assistant}
        </div>

        <div className={"question-date"}>
            {q.date}
        </div>
    </div>
)

export default Question;