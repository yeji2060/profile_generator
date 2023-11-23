const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profile = {
  "name": '',
  "favorite activity": '',
  "favorite song": '',
  "favorite meal": '',
  "favorite thing to eat": '',
  "favorite sports": '',
  "superpower": ''
};

rl.question("Whats your name? Nicknames are also acceptable :)", (answer1) => {
  profile.name = answer1;
  rl.question("What's an activity you like doing?", (answer2) => {
    profile['favorite activity'] = answer2;
    rl.question("What do you listen to while doing that?", (answer3) => {
      profile['favorite song'] = answer3;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer4) => {
        profile['favorite meal'] = answer4;
        rl.question("What's your favourite thing to eat for that meal?", (answer5) => {
          profile['favorite thing to eat'] = answer5;
          rl.question("Which sport is your absolute favourite?", (answer6) => {
            profile['favorite sports'] = answer6;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer7) => {
              profile.superpower = answer7;
              console.log(profile);
              rl.close();
            })
          })
        })
      })
    })
  })
});










