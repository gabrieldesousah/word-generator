const fs = require('fs');

async function generateWord(req, res)
{
    await fs.readFile('./syllables/pt.json', 'utf8', (err, data) => {
        if(err) {
            return console.log("Erro ao ler arquivo", err);
        }

        const jsonData = JSON.parse(data);
        // const indices = Object.keys(jsonData);
        const values = Object.values(jsonData);

        let allSyllables = [];
        for(let i=0; i<values.length; i++) {
            allSyllables = allSyllables.concat(values[i]);
        }

        let numberOfSyllables = Math.floor(Math.random(1, 2)*10);
        numberOfSyllables = (numberOfSyllables == 1) ? 2 : numberOfSyllables;
        numberOfSyllables = (numberOfSyllables > 5) ? 5 : numberOfSyllables;

        let word = "";
        for(let i=0; i < numberOfSyllables; i++) {
            word += allSyllables[getRandomIntInclusive(0, allSyllables.length)];
        }

        return res.json(word);
    });
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

module.exports = { generateWord }