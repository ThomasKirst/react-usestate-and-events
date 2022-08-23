import React from 'react';
import ExerciseOne from './components/01-exercise';
import ExerciseTwo from './components/02-exercise';
import ExerciseThree from './components/03-exercise';
import ExerciseFour from './components/04-exercise';

function App() {
  return (
    <main className="flex flex-col gap-4 p-5">
      <h1 className="text-3xl font-bold">useState and Events Exercise</h1>
      <ExerciseOne />
      <ExerciseTwo />
      <ExerciseThree />
      <ExerciseFour />
    </main>
  );
}

export default App;
