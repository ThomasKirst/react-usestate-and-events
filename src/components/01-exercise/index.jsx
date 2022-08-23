import React from 'react';

/*
 * Exercise One
 *
 * We want this button to log something into the console,
 * if you click it.
 */

function ExerciseOne() {
  return (
    <section className="bg-slate-200 p-2 rounded-lg">
      <h2 className="text-2xl mb-3">Exercise 1</h2>
      <button className="bg-orange-600 text-white rounded-lg p-2" type="button">
        Console Log Button
      </button>
    </section>
  );
}

export default ExerciseOne;
