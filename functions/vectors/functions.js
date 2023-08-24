/* const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const animals = require('../reference/animals.json');
let inputs = animals.slice();
let embeddings = [];

while (inputs.length) {
  let tokenCount = 0;
  let batchedInputs = [];
  while (inputs.length &amp;&amp; tokenCount < 4096) {
    let input = inputs.shift();
    batchedInputs.push(input);
    tokenCount += input.split(' ').length;
  }
  let embeddingResult = await lib.openai.playground['@0.0.4'].embeddings.create({
    model: `text-embedding-ada-002`,
    input: batchedInputs
  });
  embeddings = embeddings.concat(
    embeddingResult.data.map(entry => entry.embedding)
  );
} */
