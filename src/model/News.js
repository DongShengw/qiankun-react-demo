import {Link} from "react-router-dom";
import Counter from "./Counter";
import CounterStore from "../store/CounterStore";
const counterStore = new CounterStore()
const News = () => {
    return <div>
        <p>News</p>
        <Link to="/">
            <button>
                home
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
export default News