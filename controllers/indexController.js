const fs = require('fs');

function generateWord(req, res)
{
    fs.readFile('./syllables/pt.json', 'utf8', (err, data) => {
        if(err) {
            return console.log("Erro ao ler arquivo", err);
        }

        const jsonData = JSON.parse(data);
        // const indices = Object.keys(jsonData);
        const values = Object.values(jsonData);

        let SyllablesWithVogals = jsonData.vogals;
        SyllablesWithVogals = Object.values(SyllablesWithVogals);
        let SyllablesWithConsoants = jsonData.consoants;
        SyllablesWithConsoants = Object.values(SyllablesWithConsoants);

        let allSyllablesWithVogals = [];
        for(let i=0; i<SyllablesWithVogals.length; i++) {
            allSyllablesWithVogals = allSyllablesWithVogals.concat(SyllablesWithVogals[i])
        }
        
        let allSyllablesWithConsoants = [];
        for(let i=0; i<SyllablesWithConsoants.length; i++) {
            allSyllablesWithConsoants = allSyllablesWithConsoants.concat(SyllablesWithConsoants[i])
        }

        let allSyllables = [];
        allSyllables = allSyllablesWithConsoants.concat(allSyllablesWithVogals);

        let numberOfSyllables = Math.floor(Math.random(1, 2)*10);
        numberOfSyllables = (numberOfSyllables == 1) ? 2 : numberOfSyllables;
        numberOfSyllables = (numberOfSyllables >= 4) ? 4 : numberOfSyllables;

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