//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

// import { computeHeadingLevel } from "@testing-library/dom";

export default function StudentWork() {
  //add variables here
  const name = 'Faith';
  const age = 28;
  const hobbies = ['Reading', 'Programming', 'Painting'];

  return (
    <div>
      <h1>About Me</h1>
      <p>
        {' '}
        Hi, my name is {name}. I am a student in the Code the Dream School. I am{' '}
        {age} years old, and I live in the Midwest. My hobbies include:{' '}
      </p>

      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
