import userImage from "../../assets/imgs/user-1.jpg";
import "./UserImage.css"
const UserImage = () => (
    <img src={userImage} alt={"User"} className={"userImg"}/>
)

export default UserImage;