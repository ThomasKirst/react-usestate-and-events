import React, { useState } from 'react';

/*
 * Exercise Two
 *
 * Use the useState-Hook from react to toggle the text
 * within the button between "Login" and "Logout"
 */

function ExerciseTwo() {
  return (
    <section className="bg-slate-200 p-2 rounded-lg">
      <h2 className="text-2xl mb-3">Exercise 2</h2>
      <button className="bg-orange-600 text-white rounded-lg p-2" type="button">
        Login
      </button>
    </section>
  );
}

export default ExerciseTwo;
