import CourseGoal from './components/CourseGoal';
import Header from './components/Header';
import goalsImage from './assets/goals.jpg';
import { useState } from 'react';

type CourseGoalType = {
  id: number;
  title: string;
  description?: string;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoalType[]>([]);

  function handleAddGoal() {
    const newGoal: CourseGoalType = {
      title: 'Learn React + TS',
      description: 'Learn it from the ground up',
      id: Math.random(),
    };

    setGoals((ps) => {
      return [...ps, newGoal];
    });
  }

  return (
    <main>
      <Header image={{ src: goalsImage, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>

      <button onClick={handleAddGoal}>Add Goal</button>

      <ul>
        {goals.map((goal) => {
          return (
            <li key={goal.id}>
              <CourseGoal title={goal.title} description={goal.description} />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
