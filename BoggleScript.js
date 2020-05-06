function CheckRepeats(CurrentIndex, ArrayOfIndices) {
    // go through each element of the array, see if they are the same coordinates as the CurrentIndex, return true if true
    // if none of the elements are, then return false
    for(i = 0; i < ArrayOfIndices.length; i++) {
         if(CurrentIndex.y === ArrayOfIndices[i].y && CurrentIndex.x === ArrayOfIndices[i].x) {
             return true;
         }      
    }
    return false;      
}

function RecursiveBoggleStep (Word, FourbyFourMat, CurrIndex, PrevIndices) {
    
    /* Recursively Steps through a boggle board to solve it for the given word.
       The word must be at least 3 letters long as per the rules of boggle. 
       There can also be no repeated spaces used. Using those rules, and
       assuming the CurrIndex given to the function contains the first letter
       of the word, it calls itself in each legal horizontal, vertical, and
       diagonal direction, and with the word minus the the first letter. The base
       case is when the word given to the function is empty, meaning all of the letters
       have been found on the board in a sequence with no repeats. The recursion will
       eventually assign either true or undefined to retValue, which is the variable
       the function ultimately returns. If assigned undefined, it will return be interpreted
       as false, which is intentional.*/
    
    //base case: Each letter in the word has been found,
    if(Word.length === 0) {
        return true;
    }
    
    // Assign a variable to catch the result of the recursion
    var retValue = 
        if(Word.charAt(0) === FourbyFourMat[CurrIndex.y][CurrIndex.x]) {
        
        // 8 statements for each possible step, checks for legality of move,
        // then check for repeats,
        // then calls the recursive statement if legal
        
        //West Step
            if((0 <= CurrIndex.y <= 3) && (0 <= (CurrIndex.x - 1) <= 3)) {
                var NewIndex = [CurrIndex.y, (CurrIndex.x - 1)];
                if(!CheckRepeats(NewIndex, PrevIndices)) {
                    var NewPrevIndices = PrevIndices.push(CurrIndex);
                    RecursiveBoggleStep(Word.substr(1, (Word.length - 1)), NewIndex, NewPrevIndices);
                }
            }

        //NortWest Step
            if((0 <= (CurrIndex.y - 1) <= 3) && (0 <= (CurrIndex.x - 1) <= 3)) {
                var NewIndex = [(CurrIndex.y -1), (CurrIndex.x - 1)];
                if(!CheckRepeats(NewIndex, PrevIndices)) {
                    var NewPrevIndices = PrevIndices.push(CurrIndex);
                    RecursiveBoggleStep(Word.substr(1, (Word.length - 1)), NewIndex, NewPrevIndices);
                }
            }
           
        //North Step
            if((0 <= (CurrIndex.y - 1) <= 3) && (0 <= CurrIndex.x <= 3)) {
                var NewIndex = [(CurrIndex.y -1), CurrIndex.x];
                if(!CheckRepeats(NewIndex, PrevIndices)) {
                    var NewPrevIndices = PrevIndices.push(CurrIndex);
                    RecursiveBoggleStep(Word.substr(1, (Word.length - 1)), NewIndex, NewPrevIndices);
                }
            }
           
        //NorthEast Step
            if((0 <= (CurrIndex.y - 1) <= 3) && (0 <= (CurrIndex.x + 1) <= 3)) {
                var NewIndex = [(CurrIndex.y -1), (CurrIndex.x + 1)];
                if(!CheckRepeats(NewIndex, PrevIndices)) {
                    var NewPrevIndices = PrevIndices.push(CurrIndex);
                    RecursiveBoggleStep(Word.substr(1, (Word.length - 1)), NewIndex, NewPrevIndices);
                }
            }
           
        //East Step
            if((0 <= CurrIndex.y <= 3) && (0 <= (CurrIndex.x + 1) <= 3)) {
                var NewIndex = [CurrIndex.y, (CurrIndex.x + 1)];
                if(!CheckRepeats(NewIndex, PrevIndices)) {
                    var NewPrevIndices = PrevIndices.push(CurrIndex);
                    RecursiveBoggleStep(Word.substr(1, (Word.length - 1)), NewIndex, NewPrevIndices);
                }
            }
           
        //SouthEast Step
            if((0 <= (CurrIndex.y + 1) <= 3) && (0 <= (CurrIndex.x + 1) <= 3)) {
                var NewIndex = [(CurrIndex.y + 1), (CurrIndex.x + 1)];
                if(!CheckRepeats(NewIndex, PrevIndices)) {
                    var NewPrevIndices = PrevIndices.push(CurrIndex);
                    RecursiveBoggleStep(Word.substr(1, (Word.length - 1)), NewIndex, NewPrevIndices);
                }
            }
           
        //South Step
            if((0 <= (CurrIndex.y + 1) <= 3) && (0 <= CurrIndex.x <= 3)) {
                var NewIndex = [(CurrIndex.y + 1), CurrIndex.x];
                if(!CheckRepeats(NewIndex, PrevIndices)) {
                    var NewPrevIndices = PrevIndices.push(CurrIndex);
                    RecursiveBoggleStep(Word.substr(1, (Word.length - 1)), NewIndex, NewPrevIndices);
                }
            }
        
        //SouthWest Step
            if((0 <= (CurrIndex.y + 1) <= 3) && (0 <= (CurrIndex.x - 1) <= 3)) {
                var NewIndex = [(CurrIndex.y + 1), (CurrIndex.x - 1)];
                if(!CheckRepeats(NewIndex, PrevIndices)) {
                    var NewPrevIndices = PrevIndices.push(CurrIndex);
                    RecursiveBoggleStep(Word.substr(1, (Word.length - 1)), NewIndex, NewPrevIndices);
                }
            }
        } else {
            return;
        }
    return retValue;
}

function FindGivenWord(Word, FourbyForMat) {
    for(y = 0; y < 4; y++) {
        for(x = 0; x < 4; x++) {
            if (FourbyFourMat[y][x] === word.charAt[0]) {
                // if RecursiveBoggleStep finds the word it'll return true,
                // Meaning FindGivenWord should also
                if (RecursiveBoggleStep(Word.substr(1, (Word.length - 1)), FourbyForMat, [y, x], [])) {
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
function UltimateBoggleSolver(FourbyFourMat, ListofWords) {
    var FoundWordsArray = [];
    for (i = 0; i < ListofWords.length; i++) {
        if (FindGivenWord(ListofWords[i]), FourbyFourMat) {
            FoundWordsArray.push(ListofWords[i]);
        }
    }
    console.log(FoundWordsArray);
}