export const players = [
  {
    firstName: "Galit",
    gamerTag: "geeLight",
    wins: 0
  },
  {
    firstName: "Rafin",
    gamerTag: "sadboi2001",
    wins: 0
  },
  {
    firstName: "Stephan",
    gamerTag: "El Killer",
    wins: 0
  },
  {
    firstName: "Louis",
    gamerTag: "Takalalicious",
    wins: 0
  },
  {
    firstName: "May",
    gamerTag: "maycaroni",
    wins: 0
  },
]

export const playersObj = {
  "geeLight": {
    firstName: "Galit",
    gamerTag: "geeLight",
    wins: 0
  },
  "sadboi2001": {
    firstName: "Rafin",
    gamerTag: "sadboi2001",
    wins: 0
  },
  "El Killer": {
    firstName: "Stephan",
    gamerTag: "El Killer",
    wins: 0
  },
  "Takalalicious": {
    firstName: "Louis",
    gamerTag: "Takalalicious",
    wins: 0
  },
  "maycaroni": {
    firstName: "May",
    gamerTag: "maycaroni",
    wins: 0
  },
}

const newPlayers = []

for (const player of players) {
  newPlayers.push({ ...player })
}

// players[0].wins = 9999

// console.log(newPlayers)