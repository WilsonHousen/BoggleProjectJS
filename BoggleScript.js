

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
    
    var NewIndex = [CurrIndex[0] + directionArray[0], CurrIndex[1] + directionArray[1]];
    console.log(NewIndex);
   
    if(0 <= NewIndex[0] && NewIndex[0] <= 3 && 0 <= NewIndex[1] && NewIndex[1] <= 3) {
        console.log('In the switch cases');
        switch(directionArray.toString()) {
                
            // West Case
            case [0, -1].toString():
                console.log('in the west case');
                if(!CheckRepeats(NewIndex, PrevIndices)) {
                    console.log('no repeats!');
                    var NewPrevIndices = PrevIndices.concat([CurrIndex]);
                    return RecursiveBoggleStep(Word.substr(1, (Word.length - 1)), FourbyFourMat, NewIndex, NewPrevIndices);
                }
                break;
                
            //Northwest Case
            case [-1, -1].toString():
                console.log('in the northwest case');
                if(!CheckRepeats(NewIndex, PrevIndices)) {
                    console.log('no repeats');
                    var NewPrevIndices = PrevIndices.concat([CurrIndex]);
                    return RecursiveBoggleStep(Word.substr(1, (Word.length - 1)), FourbyFourMat, NewIndex, NewPrevIndices);
                }
                break;
            
            //North Case
            case [-1, 0].toString():
                console.log('in the north case');
                if(!CheckRepeats(NewIndex, PrevIndices)) {
                    console.log('no repeats');
                    var NewPrevIndices = PrevIndices.concat([CurrIndex]);
                    return RecursiveBoggleStep(Word.substr(1, (Word.length - 1)), FourbyFourMat, NewIndex, NewPrevIndices);
                }
                break;
            
            //Northeast Case
            case [-1, 1].toString():
                console.log('in the northeast case');
                if(!CheckRepeats(NewIndex, PrevIndices)) {
                    console.log('no repeats');
                    var NewPrevIndices = PrevIndices.concat([CurrIndex]);
                    return RecursiveBoggleStep(Word.substr(1, (Word.length - 1)), FourbyFourMat, NewIndex, NewPrevIndices);
                }
                break;
            
            //East Case
            case [0, 1].toString():
                console.log('in the east case');
                if(!CheckRepeats(NewIndex, PrevIndices)) {
                    console.log('no repeats');
                    var NewPrevIndices = PrevIndices.concat([CurrIndex]);
                    return RecursiveBoggleStep(Word.substr(1, (Word.length - 1)), FourbyFourMat, NewIndex, NewPrevIndices);
                }
                break;
            
            //Southeast Case
            case [1, -1].toString():
                console.log('in the southeast case');
                if(!CheckRepeats(NewIndex, PrevIndices)) {
                    console.log('no repeats');
                    var NewPrevIndices = PrevIndices.concat([CurrIndex]);
                    return RecursiveBoggleStep(Word.substr(1, (Word.length - 1)), FourbyFourMat, NewIndex, NewPrevIndices);
                }
                break;
            
            //South Case
            case [1, 0].toString():
                console.log('in the south case');
                if(!CheckRepeats(NewIndex, PrevIndices)) {
                    console.log('no repeats');
                    var NewPrevIndices = PrevIndices.concat([CurrIndex]);
                    return RecursiveBoggleStep(Word.substr(1, (Word.length - 1)), FourbyFourMat, NewIndex, NewPrevIndices);
                }
                break;
            
            //Southwest Case
            case [1, -1].toString():
                console.log('in the southwest case');
                if(!CheckRepeats(NewIndex, PrevIndices)) {
                    console.log('no repeats');
                    var NewPrevIndices = PrevIndices.concat([CurrIndex]);
                    return RecursiveBoggleStep(Word.substr(1, (Word.length - 1)), FourbyFourMat, NewIndex, NewPrevIndices);
                }
                break;
        }
    } else {
    console.log('Hit the false case');
    return false;
}
    
}
 

var RecursiveBoggleStep = function(Word, FourbyFourMat, CurrIndex, PrevIndices) { 
    
    //base case: Each letter in the word has been found
    if(Word.length === 0) {
        console.log('Hit the base case');
        return true;
    }
    if (!(Word.charAt(0) === FourbyFourMat[CurrIndex[0]][CurrIndex[1]])) {
        return false;
    } else {
            return StepDirection([0, -1], Word, FourbyFourMat, CurrIndex, PrevIndices) || StepDirection([-1, -1], Word, FourbyFourMat, CurrIndex, PrevIndices) || StepDirection([-1, 0], Word, FourbyFourMat, CurrIndex, PrevIndices) || StepDirection([-1, 1], Word, FourbyFourMat, CurrIndex, PrevIndices) || StepDirection([0, 1], Word, FourbyFourMat, CurrIndex, PrevIndices) || StepDirection([1, 1], Word, FourbyFourMat, CurrIndex, PrevIndices) || StepDirection([1, 0], Word, FourbyFourMat, CurrIndex, PrevIndices) || StepDirection([1, -1], Word, FourbyFourMat, CurrIndex, PrevIndices);
    }
    
}
        
       

var FindGivenWord = function(Word, FourbyFourMat) {
    for(y = 0; y < 4; y++) {
        for(x = 0; x < 4; x++) {
            console.log('Are we even in the loop?');
            console.log(Word.charAt(0));
            console.log(FourbyFourMat[y][x]);
            if (FourbyFourMat[y][x] === Word.charAt(0)) {
                console.log("Do we ever get inside here?");
                // if RecursiveBoggleStep finds the word it'll return true,
                // Meaning FindGivenWord should also
                if (RecursiveBoggleStep(Word, FourbyFourMat, [y, x], [])) {
                    console.log("in the final recursive check");
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
    for (i = 0; i < ListofWords.length; i++) {
        if (FindGivenWord(ListofWords[i]), FourbyFourMat) {
            FoundWordsArray.push(ListofWords[i]);
        }
    }
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
console.log(RecursiveBoggleStep("links", [['r', 'r', 'r', 'r'] , ['r', 'r', 'r', 'r'] , ['r', 'r', 'r', 'r'] , ['r', 'r', 'r', 'r']], [2, 3], []));
//          should return true
console.log(RecursiveBoggleStep('links', [['r', 's', 'k', 'r'] , ['r', 'r', 'n', 'r'] , ['r', 'r', 'i', 'l'] , ['r', 'r', 'r', 'r']], [2, 3], []));

// FindGivenWord Tests
//     should return true
console.log(FindGivenWord('links', [['r', 's', 'k', 'r'] , ['r', 'r', 'n', 'r'] , ['r', 'r', 'i', 'l'] , ['r', 'r', 'r', 'r']]));
//     should return false
console.log(FindGivenWord('links', [['r', 'r', 'r', 'r'] , ['r', 'r', 'r', 'r'] , ['r', 'r', 'r', 'r'] , ['r', 'r', 'r', 'r']]));
