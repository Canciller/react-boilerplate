import React from 'react';

import useCounter from '@hooks/useCounter';
import { decrement, increment } from '@redux/counter';
import { useAppDispatch } from '@redux/hooks';

import styles from './Home.module.scss';

const Home: React.FC = () => {
  const counter = useCounter();
  const dispatch = useAppDispatch();

  return (
    <div className={styles.root}>
      {counter.value}
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Home;
