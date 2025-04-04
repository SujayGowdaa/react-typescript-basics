import { type ReactNode } from 'react';
import { type GoalType } from '../App';

import CourseGoal from './CourseGoal';
import InfoBox from './InfoBox';

type GoalsType = {
  goals: GoalType[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({ goals, onDeleteGoal }: GoalsType) {
  if (goals.length < 1) {
    return <InfoBox mode='hint'>You have no course goal</InfoBox>;
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode='warning' severity='high'>
        You're collecting a lot of goals. Don't put too much on the plate!
      </InfoBox>
    );
  }
  return (
    <>
      {warningBox}
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
    </>
  );
}
