//Index for bot info.

const bots = [
  {
    name: "720_much_scope",
    picture: "user",
    timer: 10,
    interval: 50,
    status: "Away",
    messages: {
      phrases: ["Hej", "vad spelar ni?", "N00bs" ],
      answers: ["Vad vill du?", "Wzup?"]
    },
  },
  {
    name: "Shooter",
    picture: "user3",
    timer: 15,
    interval: 15,
    status: "Away",
    messages: {
      phrases: ["Tjena", "Sugen på att spela??", "SNAJP"],
      answers: ["Vad vill du?", "Wzup?"]
    },
  },
  {
    name: "ducky",
    picture: "user2",
    timer: 3,
    interval: 30,
    status: "Online",
    messages: {
      phrases: ["Hej", "Dåligt det gick sista rundan.."],
      answers: ["Vad vill du?", "Wzup?"]
    },
  },
  {
    name: "Unicorn",
    picture: "user",
    timer: 7,
    interval: 45,
    status: "In game",
    messages: {
      phrases: ["Yo!", "Spela rush på Locker?"],
      answers: ["Vad vill du?", "Wzup?"]
    },
  }
]

export default bots;
