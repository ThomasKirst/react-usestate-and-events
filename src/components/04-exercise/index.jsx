import React, { useState } from 'react';

/*
 * Exercise Four
 *
 * We want to control this input field.
 * To prove we are controlling it, bring the current input value
 * into the paragraph below.
 */

function ExerciseThree() {
  return (
    <section className="bg-slate-200 p-2 rounded-lg">
      <h2 className="text-2xl mb-3">Exercise 4</h2>
      <form className="mb-2">
        <label className="block font-bold mb-1" htmlFor="input">
          Controlled Input
        </label>
        <input
          type="text"
          id="input"
          className="p-1 rounded-md border border-solid border-slate-400"
        />
      </form>
      <p>
        <strong>Currently typing</strong>
        <br /> ?
      </p>
    </section>
  );
}

export default ExerciseThree;
