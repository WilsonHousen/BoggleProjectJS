

var CheckRepeats = function(CurrentIndex, ArrayOfIndices) {
    // go through each element of the array, see if they are the same coordinates as the CurrentIndex, return true if true
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


//given a boggle 4x4 matrix of words, and a list of words,
//Ultimate Boggle Solver will log to the console all
//of the words it found in the Boggle matrix that were
//in the list of words.
var UltimateBoggleSolver = function(FourbyFourMat, ListofWords) {
    var FoundWordsArray = [];
    console.log("The initial List of Words is: \n");
    console.log(ListofWords);
    console.log("The boggle board is: \n");
    console.log(FourbyFourMat[0]);
    console.log(FourbyFourMat[1]);
    console.log(FourbyFourMat[2]);
    console.log(FourbyFourMat[3]);
    for (let i = 0; i < ListofWords.length; i++) {
        if(FindGivenWord(ListofWords[i], FourbyFourMat)) {
            FoundWordsArray.push(ListofWords[i]);
        }
    }
    console.log("The present words are: \n");
    console.log(FoundWordsArray);
}

/* TEST SUITE to validate each function */

// CheckRepeats Tests
//      should be false
console.log(CheckRepeats([0,0], []));
//      should be true
console.log(CheckRepeats([1,1], [[1,1]]));
//      should be true
console.log(CheckRepeats([1,2], [[1,0], [1,2], [0,0]]));

// RecursiveBoggleStep Tests
//          should return false
console.log(RecursiveBoggleStep("links", [['r', 'r', 'r', 'r'] , 
                                          ['r', 'r', 'r', 'r'] , 
                                          ['r', 'r', 'r', 'r'] , 
                                          ['r', 'r', 'r', 'r']], [2, 3], []));
//          should return false
console.log(RecursiveBoggleStep('links', [['r', 'r', 'r', 'r'] , 
                                          ['r', 'r', 'n', 'r'] , 
                                          ['r', 'r', 'i', 'l'] , 
                                          ['r', 'r', 'r', 'r']], [2, 3], []));
//          should return true
console.log(RecursiveBoggleStep('links', [['r', 's', 'k', 'r'] , 
                                          ['r', 'r', 'n', 'r'] , 
                                          ['r', 'r', 'i', 'l'] , 
                                          ['r', 'r', 'r', 'r']], [2, 3], []));

// FindGivenWord Tests
//     should return true
console.log(FindGivenWord('links', [['r', 's', 'k', 'r'] , 
                                    ['r', 'r', 'n', 'r'] , 
                                    ['r', 'r', 'i', 'l'] , 
                                    ['r', 'r', 'r', 'r']]));
//     should return false
console.log(FindGivenWord('links', [['r', 'r', 'r', 'r'] , 
                                    ['r', 'r', 'r', 'r'] , 
                                    ['r', 'r', 'r', 'r'] , 
                                    ['r', 'r', 'r', 'r']]));


// UltimateBoggleSolver Tests
//         should return all of the present words
UltimateBoggleSolver([['W', 'o', 'r', 'd'] , 
                      ['r', 'r', 'F', 'T'] , 
                      ['e', 'o', 'r', 'w'] , 
                      ['u', 'r', 'e', 'o']], 
                    ['WordOne', 'WordTwo', 'WordThree', 'WordFour']);
//         should return no words present
UltimateBoggleSolver([['W', 'o', 'e', 'v'] , 
                      ['r', 'r', 'a', 'a'] , 
                      ['e', 'o', 'r', 'w'] , 
                      ['u', 'r', 'r', 'o']], 
                    ['WordOne', 'WordTwo', 'WordThree', 'WordFour']);
