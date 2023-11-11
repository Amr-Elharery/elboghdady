import './Course.css';
import Course1 from '../../assets/imgs/course-1.jpg';
import Course2 from '../../assets/imgs/course-2.jpg';
import News1 from '../../assets/imgs/news-01.png';
import News2 from '../../assets/imgs/news-02.png';
import News3 from '../../assets/imgs/news-03.png';
import News4 from '../../assets/imgs/news-04.png';

console.log("");
const Course = ({v}) =>(
    <div className="video">
        <div className="videoImg" data-length={v.duration}>
            {
                v.image == "course-1.jpg" ?
                    <img src={News4} />
                    : v.image == "course-2.jpg" ?
                    <img src={News3} />
                    : v.image == "news-01.jpg" ?
                    <img src={News1} />
                    :v.image == "news-02.jpg" ?
                    <img src={News2} />
                    : v.image == "news-03.jpg" ?
                    <img src={News3} />
                    :v.image == "news-04.jpg" ?
                    <img src={News4} />
                    : null

            }
        </div>
        <div className="info">
            <div className="text">
                <p className="videoName">{v.title}</p>
                <p className="channelName">Level: {v.category}</p>
            </div>
            <div className="channelImg">
                <p className="price">{v.price}LE</p>
            </div>
        </div>
    </div>
)

export default  Course;