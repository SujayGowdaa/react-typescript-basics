import { type GoalType } from '../App';
import CourseGoal from './CourseGoal';

type GoalsType = {
  goals: GoalType[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({ goals, onDeleteGoal }: GoalsType) {
  return (
    <ul>
      {goals.map((goal) => {
        return (
          <li key={goal.id}>
            <CourseGoal
              id={goal.id}
              title={goal.title}
              description={goal.description}
              onDelete={onDeleteGoal}
            />
          </li>
        );
      })}
    </ul>
  );
}
