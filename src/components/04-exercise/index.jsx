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
    <section>
      <h2 className="text-2xl text-bold">Exercise 4</h2>
      <form>
        <label>
          Controlled Input:
          <input type="text" />
        </label>
      </form>
      <p>Currently typing: ?</p>
    </section>
  );
}

export default ExerciseThree;
