import { useState } from 'react';

import Header from './components/Header';
import goalsImage from './assets/goals.jpg';
import CourseGoalList from './components/CourseGoalList';
import NewGoal from './components/NewGoal';

export type GoalType = {
  id: number;
  title: string;
  description: string;
};

export default function App() {
  const [goals, setGoals] = useState<GoalType[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    const newGoal: GoalType = {
      id: Math.random(),
      title: goal,
      description: summary,
    };

    setGoals((ps) => {
      return [...ps, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((ps) => ps.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImage, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
