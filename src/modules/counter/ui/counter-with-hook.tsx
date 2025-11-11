import { useCounter } from "../hooks/use-counter"
import styles from './counter.module.css'

export const CounterWithHook = () => {
    const { count, increment, decrement, reset } = useCounter(0)

    return (
        <div className={styles.counterHook}>
            <h2>CounterWithHook</h2>
            <p className={styles.value}>Count: {count}</p>
            <div className={styles.buttons}>
                <button onClick={increment}>+1</button>
                <button onClick={decrement}>-1</button>
                <button onClick={reset}>Сброс</button>
            </div>
        </div>
    )
}