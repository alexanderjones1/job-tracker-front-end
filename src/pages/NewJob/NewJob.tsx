import { useState } from 'react';
import { Job } from '../../types/models';
import * as jobService from '../../services/jobService';

// styles
import styles from './NewJob.module.css'

type Props = {
  handleNewJob: (job: Job) => void;
};

const NewJob = ({ handleNewJob }: Props) => {
  const [title, setTitle] = useState('');
  const [salary, setSalary] = useState(0);
  const [description, setDescription] = useState('');
  const [stillHiring, setStillHiring] = useState(true);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();   

    const newJob: Job = await jobService.create({
      title,
      salary,
      description,
      stillHiring,
    });

    handleNewJob(newJob);
  };

  return (
      <form 
      autoComplete='off'
      onSubmit={handleSubmit}
      className={styles.container}
      >
        <div className={styles.inputContainer}>
          <label>
            Title:
            <input type="text" value={title} onChange={event => setTitle(event.target.value)} />
          </label>
        </div>
        <div className={styles.inputContainer}>
          <label>
            Salary:
            <input type="number" value={salary} onChange={event => setSalary(parseInt(event.target.value))} />
          </label>
        </div>
        <div className={styles.inputContainer}>
          <label>
            Description:
            <input type="text" value={description} onChange={event => setDescription(event.target.value)} />
          </label>
        </div>
        <div className={styles.inputContainer}>
          <label>
            Still Hiring:
            <input type="checkbox" checked={stillHiring} onChange={event => setStillHiring(event.target.checked)} />
          </label>
        </div>
        <button type="submit">Create Job</button>
      </form>
  );
};

export default NewJob;
