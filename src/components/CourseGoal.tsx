import { type FC, type ReactNode } from 'react';

type CourseGoalProps = {
  title: string;
  description?: string;
  children?: ReactNode;
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

const CourseGoal: FC<CourseGoalProps> = ({ title, description, children }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children || description}</p>
      </div>
      <button>Delete</button>
    </article>
  );
};

export default CourseGoal;
