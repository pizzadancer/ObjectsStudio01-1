const chalk = require('chalk');
let idNumbers = [291, 414, 503, 599, 796, 890];

// selectRandomEntry: selects random element from an array
function selectRandomEntry(array) {
  return array[Math.floor(Math.random() * array.length)];
}

let selectedEntries = [];
let entry = 0;
// while true: call the selectRandomEntry to gen a num, and 
// if the number isn't repeated, add it to the selectedEntries array
while (selectedEntries.length < 3) {
  entry = selectRandomEntry(idNumbers);
  if (!selectedEntries.includes(entry)) {
    selectedEntries.push(entry);
  }
}
console.log(chalk.cyan.bold(":::The Random ID Numbers:::"))
console.log(selectedEntries)

// buildCrewArray: 
// run through each randomID and match it with the candidate
// if the candidate is found, push their name to the crew array
// return the matched crew
function buildCrewArray(randomIDs, candidates) {
  let crew = []; // the array all chosen animals go into
  let currentID;

  // looping through IDs
  for (let j = 0; j < randomIDs.length; j++) {
    currentID = randomIDs[j];

    // looping through candidates, if match found, push to crew
    for (let i = 0; i < candidates.length; i++) {
      if (candidates[i].astronautID === currentID) {
        crew.push(candidates[i].name);
        break;
      }
    }
  }

  return crew;

}




// Here are the candidates and the 'animals' array:
let candidateA = {
  'name': 'Gordon Shumway',
  'species': 'alf',
  'mass': 90,
  'o2Used': function(hrs) { return 0.035 * hrs },
  'astronautID': 414
};
let candidateB = {
  'name': 'Lassie',
  'species': 'dog',
  'mass': 19.1,
  'o2Used': function(hrs) { return 0.030 * hrs },
  'astronautID': 503
};
let candidateC = {
  'name': 'Jonsey',
  'species': 'cat',
  'mass': 3.6,
  'o2Used': function(hrs) { return 0.022 * hrs },
  'astronautID': 796
};
let candidateD = {
  'name': 'Paddington',
  'species': 'bear',
  'mass': 31.8,
  'o2Used': function(hrs) { return 0.047 * hrs },
  'astronautID': 291
};
let candidateE = {
  'name': 'Pete',
  'species': 'tortoise',
  'mass': 417,
  'o2Used': function(hrs) { return 0.010 * hrs },
  'astronautID': 599
};
let candidateF = {
  'name': 'Hugs',
  'species': 'ball python',
  'mass': 2.3,
  'o2Used': function(hrs) { return 0.018 * hrs },
  'astronautID': 890
};

let animals = [candidateA, candidateB, candidateC, candidateD, candidateE, candidateF];

// Code your template literal and console.log statements:

console.log(chalk.cyan.bold("\n:::The Space Crew:::"))
let crew = buildCrewArray(selectedEntries, animals);
console.log(`${crew[0]}, ${crew[1]}, and ${crew[2]} are going to space!`);