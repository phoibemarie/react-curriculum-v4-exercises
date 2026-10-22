//Lesson-02 Building with ReactDOM and components
//Exercise: Build a "Snack Ranking App" Component in this file
//Import components here
import SnackHeader from './SnackHeader';
import SnackList from './SnackList';

export default function StudentWork() {
  return (
    <div>
      <SnackHeader />
      <SnackList />
    </div>
  );
}

// ## Steps

// 1. In `src/exercises/lesson-02/` create these component files (one component per file):
//    - **SnackHeader.jsx**
//      - Default export a simple component that returns the app heading.
//    - **SnackList.jsx**
//      - Default export a component that **contains** an array of snack objects (each with `name` and `rank`, where `1` = favorite).
//      - Start with the array ordered from **least favorite to most favorite**.
//      - Use JavaScript’s `.toSorted()` to return a new array ordered from **most favorite (rank 1) to least favorite**.
//      - Render the sorted snacks as a list (ordered list or using `.map()`).
//      - Include at least **3–5** snacks.
//    - **SnackFooter.jsx**
//      - Default export a small component that returns a fun footer message.

// 2. Open this file:
//    `src/exercises/lesson-02/studentWork.jsx`
//    - Import your `SnackApp` component.
//    - Render `<SnackApp />` as the main output of this file.

// ## Proof of completion

// Once your Snack Ranking app displays correctly in the browser:

// 1. Take a screenshot of your rendered page (showing your Snack Ranking App).
// 2. Save that image in the same directory where you’re working on your component: src/exercises/lesson-02/
// 3. Commit and push your changes.
// 4. Submit your pull request (PR) link for review.

// ---
