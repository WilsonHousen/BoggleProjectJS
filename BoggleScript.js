function RecursiveBoggleStep (Word, FourbyFourMat, CurrIndex, PrevIndices) {
    //base case: Each letter in the word has been found,
    if(Word.length === 0) {
        return true;
    }
    
    // also maybe either make your own or look for a restofstring func, because
    // unsure if substring will make an empy string
    
    // need to get the boggle structure and interior datatype up
    if(Word.charAt(0) === CurrIndex.Char) {
        // need to check for legal steps, and generate each new recursive step
        RecursiveBoggleStep(Word.substr(1, (Word.length - 1)), NewIndex, PrevIndices + CurrIndex);
    } else {
        return;
    }
}

function FindGivenWord(Word, FourbyForMat) {
    for(y = 0; y < 4; y++) {
        for(x = 0; x < 4; x++) {
            if (FourbyFourMat[y][x] === word.charAt[0]) {
                // if RecursiveBoggleStep finds the word it'll return true,
                // FindGivenWord should return
                if (RecursiveBoggleStep(Word.substr(1, (Word.length - 1)), FourbyForMat, [y, x], [])) {
                    return true;
                }
            }
        }
    }
    
    //didn't find the word so return false
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