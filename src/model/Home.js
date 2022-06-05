import {Link} from "react-router-dom";

const Home = () => {
    return <div>
        <p>Home</p>
        <Link to="/news">
            <button>
                news
            </button>
        </Link>
        <Link to="/phone">
            <button>
                phone
            </button>
        </Link>
    </div>
}
export default Home