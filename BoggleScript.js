/*TODO Board*/ 

// move some of the bogglescript into the app.js file
// decide what part of the app moves and what stays (does the boggle logic stay? does the data gen stuff?)

/*****************/

var CheckRepeats = function(CurrentIndex, ArrayOfIndices) {
    // go through each element of the array, see if they are 
    // the same coordinates as the CurrentIndex, return true if true
    // if none of the elements are, then return false
    for(i = 0; i < ArrayOfIndices.length; i++) {
         if(CurrentIndex[0] === ArrayOfIndices[i][0] && CurrentIndex[1] === ArrayOfIndices[i][1]) {
             return true;
         }      
    }
    return false;      
}

var StepDirection = function(directionArray, Word, FourbyFourMat, CurrIndex, PrevIndices) {
    // kind of a recursive wrapper for RecursiveBoggleStep
    // It generates the NewIndex, checks to see that it is a legal index in the board,
    // and then if so it uses a switch case to call RecursiveBoggleStep in the new direction
    // as decided by the DirectionArray, which just carries a double that transforms 
    // the CurrIndex in one of 8 directions
    
    //make the new Index
    var NewIndex = [CurrIndex[0] + directionArray[0], CurrIndex[1] + directionArray[1]];
   
    //Check to see that it is a legal step
    if(0 <= NewIndex[0] && NewIndex[0] <= 3 && 0 <= NewIndex[1] && NewIndex[1] <= 3) {
        
        //switch block to call RecursiveBoggleStep in the correct direction
        switch(directionArray.toString()) {
                
            // West Case
            case [0, -1].toString():
                if(!CheckRepeats(NewIndex, PrevIndices)) {
                    var NewPrevIndices = PrevIndices.concat([CurrIndex]);
                    return RecursiveBoggleStep(Word.substr(1, (Word.length - 1)), 
                                               FourbyFourMat, 
                                               NewIndex, 
                                               NewPrevIndices);
                }
                break;   
            //Northwest Case
            case [-1, -1].toString():
                if(!CheckRepeats(NewIndex, PrevIndices)) {
                    var NewPrevIndices = PrevIndices.concat([CurrIndex]);
                    return RecursiveBoggleStep(Word.substr(1, (Word.length - 1)), 
                                               FourbyFourMat, 
                                               NewIndex, 
                                               NewPrevIndices);
                }
                break;
            //North Case
            case [-1, 0].toString():
                if(!CheckRepeats(NewIndex, PrevIndices)) {
                    var NewPrevIndices = PrevIndices.concat([CurrIndex]);
                    return RecursiveBoggleStep(Word.substr(1, (Word.length - 1)), 
                                               FourbyFourMat, 
                                               NewIndex, 
                                               NewPrevIndices);
                }
                break;
            //Northeast Case
            case [-1, 1].toString():
                if(!CheckRepeats(NewIndex, PrevIndices)) {
                    var NewPrevIndices = PrevIndices.concat([CurrIndex]);
                    return RecursiveBoggleStep(Word.substr(1, (Word.length - 1)), 
                                               FourbyFourMat, 
                                               NewIndex, 
                                               NewPrevIndices);
                }
                break;
            //East Case
            case [0, 1].toString():
                if(!CheckRepeats(NewIndex, PrevIndices)) {
                    var NewPrevIndices = PrevIndices.concat([CurrIndex]);
                    return RecursiveBoggleStep(Word.substr(1, (Word.length - 1)), 
                                               FourbyFourMat, 
                                               NewIndex, 
                                               NewPrevIndices);
                }
                break;
            //Southeast Case
            case [1, -1].toString():
                if(!CheckRepeats(NewIndex, PrevIndices)) {
                    var NewPrevIndices = PrevIndices.concat([CurrIndex]);
                    return RecursiveBoggleStep(Word.substr(1, (Word.length - 1)), 
                                               FourbyFourMat, 
                                               NewIndex, 
                                               NewPrevIndices);
                }
                break;
            //South Case
            case [1, 0].toString():
                if(!CheckRepeats(NewIndex, PrevIndices)) {
                    var NewPrevIndices = PrevIndices.concat([CurrIndex]);
                    return RecursiveBoggleStep(Word.substr(1, (Word.length - 1)), 
                                               FourbyFourMat, 
                                               NewIndex, 
                                               NewPrevIndices);
                }
                break;
            //Southwest Case
            case [1, -1].toString():
                if(!CheckRepeats(NewIndex, PrevIndices)) {
                    var NewPrevIndices = PrevIndices.concat([CurrIndex]);
                    return RecursiveBoggleStep(Word.substr(1, (Word.length - 1)), 
                                               FourbyFourMat, 
                                               NewIndex, 
                                               NewPrevIndices);
                }
                break;
        }
    }  
}
 

var RecursiveBoggleStep = function(Word, FourbyFourMat, CurrIndex, PrevIndices) { 
    //Basically handles the greater structure of recursion
    //two base cases: if the Word is empty, returns true
    //                if the first letter of Word doesn't match the letter at CurrIndex, return false
    //    otherwise, returns the OR'd combination of each legal StepDirection
    
    //base case: Each letter in the word has been found
    if(Word.length === 0) {
        return true;
    }
    //base case 2: on an index that can't continue the word
    if (!(Word.charAt(0) === FourbyFourMat[CurrIndex[0]][CurrIndex[1]])) {
        return false;
    } else {
        //recursive case: the letter was found, search for the next letter in up to 8 directions
            return StepDirection([0, -1], Word, FourbyFourMat, CurrIndex, PrevIndices) || 
                StepDirection([-1, -1], Word, FourbyFourMat, CurrIndex, PrevIndices) || 
                StepDirection([-1, 0], Word, FourbyFourMat, CurrIndex, PrevIndices) || 
                StepDirection([-1, 1], Word, FourbyFourMat, CurrIndex, PrevIndices) || 
                StepDirection([0, 1], Word, FourbyFourMat, CurrIndex, PrevIndices) || 
                StepDirection([1, 1], Word, FourbyFourMat, CurrIndex, PrevIndices) || 
                StepDirection([1, 0], Word, FourbyFourMat, CurrIndex, PrevIndices) ||
                StepDirection([1, -1], Word, FourbyFourMat, CurrIndex, PrevIndices);
    }
    
}
        
       

var FindGivenWord = function(Word, FourbyFourMat) {
    //for each letter in the board, see if it's the same
    //as the first letter of Word. If so, check RecursiveBoggleStep, and
    //if that returns true, return true
    for(y = 0; y < 4; y++) {
        for(x = 0; x < 4; x++) {
            if (FourbyFourMat[y][x] === Word.charAt(0)) {
                // if RecursiveBoggleStep finds the word it'll return true,
                // Meaning FindGivenWord should also
                if (RecursiveBoggleStep(Word, FourbyFourMat, [y, x], [])) {
                    return true;
                }
            }
        }
    }
    // didn't find the word so return false
    return false;
}

// given a boggle 4x4 matrix of words, and a list of words,
// Ultimate Boggle Solver will log to the console all
// of the words it found in the Boggle matrix that were
// in the list of words.
// will only print out words if the verbose tag is true.
// will return the list of found words.
var UltimateBoggleSolver = function(FourbyFourMat, ListofWords, VerboseTag) { // slowly removing verbose and basic console testing
    var FoundWordsArray = [];
    for (let i = 0; i < ListofWords.length; i++) {
        if(FindGivenWord(ListofWords[i], FourbyFourMat)) {
            FoundWordsArray.push(ListofWords[i]);
        }
    }
}

// ^ everything above should go in an app.js file with express
// v everything below should stay in a script file, maybs modified to have templating and do html stuff

// taken from this stackoverflow answer: https://stackoverflow.com/a/52896796
function randomChar() {
    // https://stackoverflow.com/a/40586869
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function createRandomBoggleTable() {
    return [
        [randomChar(), randomChar(), randomChar(), randomChar()],
        [randomChar(), randomChar(), randomChar(), randomChar()],
        [randomChar(), randomChar(), randomChar(), randomChar()],
        [randomChar(), randomChar(), randomChar(), randomChar()],
    ];
}

  function createList(data) {
      return data.map(row => `${getCells(row, 'div')}`).join('');
  }
  
  function getCells(data, type) {
    return data.map(cell => `<${type}>${cell}</${type}>`).join('');
  }
  
  function createBody(data) {
    return data.map(row => `<tr>${getCells(row, 'td')}</tr>`).join('');
  }
  
  function createTable(data) {
    const [...rows] = data;
    //  <thead>${getCells(headings, 'th')}</thead> (after <table>)
    return `
      <table id="BoggleBoard">
        <tbody>${createBody(rows)}</tbody>
      </table>
    `;
  }
  // until this point

fs = require('fs');

function solveBoggle() {
    boggleCSV = document.getElementById('BoggleBoard').dataset.table;
    boggleArr = boggleCSV.split(',');
    let newBoard = new Array(new Array(4), new Array(4), new Array(4), new Array(4));
    for (x = 0; x <= 3; x++) {
        for (y = 0; y <= 3; y++) {
            newBoard[x][y] = boggleArr[x+y];
        }
    }
    // following two lines: extensive testing! ellipsis symbol, fs, words.txt, buffer class, all of it!
    let wordBank = fs.readFile('words.txt');
    let ListofWords = [...wordBank];
    let foundWords = UltimateBoggleSolver(newBoard, ListofWords, false);
    document.body.insertAdjacentHTML('beforeend', '<div>List of Found Words</div');
    document.body.insertAdjacentHTML('beforeend', createList(foundWords));
}

// http://www.nullskull.com/q/10197198/how-to-replace-a-table-by-another-table-in-html.aspx
function changeTable(str) {
    document.getElementById("TableDiv").innerHTML = str;
 }

function makeNewBoggleTable() {
    let newBoard = createRandomBoggleTable(); 
    changeTable(createTable(newBoard));
    document.getElementById("BoggleBoard").dataset.table = newBoard;
}

