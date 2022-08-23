import React, { useState } from 'react';

/*
 * Exercise Three
 *
 * Let´s build a Counter!
 * We have two buttons: one is supposed to subtract,
 * the other one should add 1 to the counter
 */

function ExerciseThree() {
  return (
    <section className="bg-slate-200 p-2 rounded-lg">
      <h2 className="text-2xl mb-3">Exercise 3</h2>

      <div className="flex items-center border border-solid border-gray-700 rounded-full w-max">
        <button
          className="rounded-full bg-slate-800 text-white h-10 w-10 m-2"
          type="button"
        >
          -1
        </button>
        <output className="text-2xl">0°</output>
        <button
          className="rounded-full bg-orange-600 text-white h-10 w-10 m-2"
          type="button"
        >
          +1
        </button>
      </div>
    </section>
  );
}

export default ExerciseThree;
