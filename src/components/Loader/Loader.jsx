import { Circles } from "react-loader-spinner";

import styles from './Loader.module.css';

const Loader = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <Circles
          className={styles.loader}
                  visible={isLoading}
                  color="var(--accent-color)"
          ariaLabel="Loading"
        />
      )}
    </>
  );
};

export default Loader