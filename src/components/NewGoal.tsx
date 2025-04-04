import { useRef, type FormEvent } from 'react';

type NewGoalProp = {
  onAddGoal: (goal: string, summary: string) => void;
};

export default function NewGoal({ onAddGoal }: NewGoalProp) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleOnSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    onAddGoal(enteredGoal, enteredSummary);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <p>
        <label htmlFor='goal'>Your Goal</label>
        <input id='goal' type='text' ref={goal} />
      </p>
      <p>
        <label htmlFor='summary'>short summary</label>
        <input id='summary' type='text' ref={summary} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
