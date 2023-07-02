export type TypeOfTask = { id: string; title: string; state?: string };

const onRecoverTask = (id: string) => {
  console.log(id + 'is archived');
};

interface Props {
  task: TypeOfTask;
  onRecoverTask: typeof onRecoverTask;
}

export default function FinishedTask({ task: { id, title, state }, onRecoverTask }: Props) {
  return (
    <div className={`list-item ${state}`}>
      <label htmlFor='checked' aria-label={`archiveTask-${id}`} className='checkbox'>
        <input
          type='checkbox'
          disabled={true}
          name='checked'
          id={`archiveTask-${id}`}
          checked={state === 'TASK_ARCHIVED'}
        />
        <span className='checkbox-custom' onClick={() => onRecoverTask(id)} />
      </label>

      <label htmlFor='title' aria-label={title} className='title'>
        <input
          type='text'
          value={title}
          readOnly={true}
          name='title'
          placeholder='Input title'
          className='text-black'
        />
      </label>
    </div>
  );
}
