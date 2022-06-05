import {Link} from "react-router-dom";
import Counter from "./Counter";
import CounterStore from "../store/CounterStore";
const counterStore = new CounterStore()
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
        <Counter counterStore={counterStore} />
    </div>
}
export default Home