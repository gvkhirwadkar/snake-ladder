import ProgressBar from "./ProgressBar";
import useProgress from "../useProgress";
import { useCallback, useState } from "react";
import styles from "./Container.module.css";
import Button from "../../button/Button";

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
      <Button disabled={!isCompleted} onClick={reload} label="Reload"></Button>
      <ProgressBar value={progressValue} onEnd={onEnd} />
      {isCompleted ? <span>Completed</span> : <span>Loading</span>}
    </div>
  );
}

export default ProgressBarContainer;
