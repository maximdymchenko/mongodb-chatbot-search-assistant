const { NlpManager } = require("node-nlp");

const manager = new NlpManager({ languages: ["en"], forceNER: true });
// Adds the utterances and intents for the NLP
manager.addDocument("en", "hello", "greetings.hello");
manager.addDocument("en", "hi", "greetings.hello");
manager.addDocument("en", "howdy", "greetings.hello");
manager.addDocument("en", "hey", "greetings.hello");

manager.addDocument("en", "goodbye for now", "greetings.bye");
manager.addDocument("en", "bye bye take care", "greetings.bye");
manager.addDocument("en", "okay see you later", "greetings.bye");
manager.addDocument("en", "bye for now", "greetings.bye");
manager.addDocument("en", "i must go", "greetings.bye");

manager.addDocument("en", "what service do you provide?", "ask.common");
manager.addDocument("en", "can you let me know how i can start to search?", "ask.common");
manager.addDocument("en", "how to search", "ask.common");
manager.addDocument("en", "what should i do?", "ask.common");
manager.addDocument("en", "i am looking for apartment or hotels", "ask.common");

// Train also the NLG
manager.addAnswer("en", "greetings.hello", "Hey there!");
manager.addAnswer("en", "greetings.hello", "Greetings!");

manager.addAnswer("en", "greetings.bye", "Till next time");
manager.addAnswer("en", "greetings.bye", "see you soon!");

// Train and save the model.
(async () => {
  await manager.train();
  manager.save("src/train/model.nlp");
  //   const response = await manager.process("en", "I should go now");
  //   console.log(response);
})();
