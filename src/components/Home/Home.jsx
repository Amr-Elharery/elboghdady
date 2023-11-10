import PageHeading from '../PageHeading/PageHeading';
import New from '../New/New';
import './Home.css';
import useFetch from "../../hooks/useFetch";
import Loader from "../Loader/Loader";
export default function Home(){
    const {data, isLoading, error, reFetch} = useFetch("news");

    return (
        <div className={"elements-container"}>
            <PageHeading text={"Latest New"} />

            <div className={"news-holder"}>
                {
                    isLoading ?
                        <Loader />
                        :
                        error ? reFetch()
                        :
                        data.map(n =>(<New n={n} k={n.id}/>))
                }
            </div>
        </div>
    )
}