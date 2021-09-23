import React from 'react';
import styles from './Home.module.scss';
import { useAppDispatch } from '@redux/hooks';
import { decrement, increment } from '@redux/counter';
import useCounter from '@hooks/useCounter';

const Home: React.FC = () => {
  const counter = useCounter();
  const dispatch = useAppDispatch();

  return (
    <div
      className={styles.root}
    >
      {counter.value}
      <button
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
}

export default Home;
