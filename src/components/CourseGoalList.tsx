import { type GoalType } from '../App';
import CourseGoal from './CourseGoal';

type GoalsType = {
  goals: GoalType[];
};

export default function CourseGoalList({ goals }: GoalsType) {
  return (
    <ul>
      {goals.map((goal) => {
        return (
          <li key={goal.id}>
            <CourseGoal title={goal.title} description={goal.description} />
          </li>
        );
      })}
    </ul>
  );
}
