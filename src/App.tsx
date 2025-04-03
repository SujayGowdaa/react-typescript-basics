import CourseGoal from './components/CourseGoal';

export default function App() {
  return (
    <main>
      <CourseGoal
        title='Learn React + TS'
        description='Learn it from the ground up'
      />
      <CourseGoal title='Learn React + TS'>
        Learn it from the ground up
      </CourseGoal>
    </main>
  );
}
