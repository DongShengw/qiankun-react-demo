import {Link} from "react-router-dom";
import Counter from "./Counter";
import CounterStore from "../store/CounterStore";
const counterStore = new CounterStore()
const Phone = () => {
    return <div>
        <p>Phone</p>
        <Link to="/news">
            <button>
                news
            </button>
        </Link>
        <Link to="/">
            <button>
                home
            </button>
        </Link>
        <Counter counterStore={counterStore} />
    </div>
}
export default Phone