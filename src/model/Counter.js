
import { observer } from 'mobx-react-lite'

function Counter({counterStore}) {
    return (
        <div>
            <button onClick={() => counterStore.decrease()}>-</button>
            <span>{counterStore.count}</span>
            <button onClick={() => counterStore.increment()}>+</button>
            <button onClick={() => counterStore.reset()}>重置</button>
        </div>
    )
}

export default observer(Counter)

