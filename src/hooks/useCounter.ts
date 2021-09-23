import { useAppSelector } from '@redux/hooks';

const useCounter = () => {
  return useAppSelector(state => state.counter);
};

export default useCounter;
