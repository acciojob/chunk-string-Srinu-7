function stringChop(str, size) {
  if (!str) {
    return [];
  }

  const chunks = [];
  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.slice(i, i + size));
  }

  return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."), 10);

// Normalize the chunks by removing any extra spaces
const normalizedChunks = stringChop(str, size).map(chunk => chunk.trim());

// Display the result as an alert with the chunks joined by commas
alert(normalizedChunks.join(", "));
