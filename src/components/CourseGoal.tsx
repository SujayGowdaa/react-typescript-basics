import { type ReactNode } from 'react';

type CourseGoalProps = {
  title: string;
  description?: string;
  children?: ReactNode;
};

export default function CourseGoal({
  title,
  description,
  children,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children || description}</p>
      </div>
      <button>Delete</button>
    </article>
  );
}
