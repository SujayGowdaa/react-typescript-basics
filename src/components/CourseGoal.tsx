import { type FC, type ReactNode } from 'react';

type CourseGoalProps = {
  id: number;
  title: string;
  description?: string;
  children?: ReactNode;
  onDelete: (id: number) => void;
};

// export default function CourseGoal({
//   title,
//   description,
//   children,
// }: CourseGoalProps) {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         <p>{children || description}</p>
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// }

// Alternative approach to create a component using arrow function

// const CourseGoal = ({ title, description, children }: CourseGoalProps) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         <p>{children || description}</p>
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };

// export default CourseGoal;

// OR

const CourseGoal: FC<CourseGoalProps> = ({
  id,
  title,
  description,
  children,
  onDelete,
}) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children || description}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
};

export default CourseGoal;
