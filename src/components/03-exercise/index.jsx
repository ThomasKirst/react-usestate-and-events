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
    <section>
      <h2 className="text-2xl text-bold">Exercise 3</h2>

      <button className="rounded-full bg-blue-500 h-10 w-10 m-2" type="button">
        -1
      </button>
      <output className="text-2xl">0</output>
      <button
        className="rounded-full bg-orange-600 h-10 w-10 m-2"
        type="button"
      >
        +1
      </button>
    </section>
  );
}

export default ExerciseThree;
