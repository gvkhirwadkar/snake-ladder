import ProgressBar from "./ProgressBar";
import useProgress from "../useProgress";
import { useCallback, useState } from "react";
import styles from "./Container.module.css";

function ProgressBarContainer() {
  const [isCompleted, setIsCompleted] = useState(false);
  const { value: progressValue, setValue: setProgress } = useProgress();
  const onEnd = useCallback(() => {
    setIsCompleted(true);
  }, []);

  const reload = () => {
    setProgress(0);
    setIsCompleted(false);
  };

  return (
    <div className={styles.container}>
      <button
        disabled={!isCompleted}
        className={styles.reloadButton}
        onClick={reload}
      >
        Reload
      </button>
      <ProgressBar value={progressValue} onEnd={onEnd} />
      {isCompleted ? <span>Completed</span> : <span>Loading</span>}
    </div>
  );
}

export default ProgressBarContainer;
