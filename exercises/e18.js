/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

import { data } from "../data/data";

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  const asteroids = data.asteroids;
  let yearCounts = {};
  let maxCount = 0;
  let greatestYear;

    for (let asteroid of asteroids) {
      let year = asteroid.discoveryYear;
        if (yearCounts[year]) {
          yearCounts[year]++;
        }else {
          yearCounts[year] = 1;
        }

        if (yearCounts[year] > maxCount) {
          maxCount = yearCounts[year];
          greatestYear = year;
        }
    }
    return greatestYear;
}
getGreatestDiscoveryYear(data);

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
