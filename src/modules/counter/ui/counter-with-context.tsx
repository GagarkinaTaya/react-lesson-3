import { useCounterContext } from "../hooks/use-counter-context"
import styles from './counter.module.css'

export const CounterWithContext = () => {
    const { count, increment, decrement, reset } = useCounterContext()

    return (
        <div className={styles.counterHook}>
            <h2>CounterWithContext</h2>
            <p className={styles.value}>Count: {count}</p>
            <div className={styles.buttons}>
                <button onClick={increment}>+1</button>
                <button onClick={decrement}>-1</button>
                <button onClick={reset}>Сброс</button>
            </div>
        </div>
    )
}