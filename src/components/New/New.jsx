import './New.css'
export default function New({n,k}) {
    return (
        <div className={"new"} key={k}>
            <span className={"newId"}>
                #{n.id}
            </span>
            {n.new}
            .
            <span className={"newDate"}>
                {n.date}
            </span>
        </div>
    );
}