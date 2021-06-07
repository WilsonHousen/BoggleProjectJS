# BoggleProjectJS
Solves for Words in Boggle.

Represents a boggle board with a 4x4 matrix abstracted as an array of arrays.
Takes an array of words, where each word is 3 letters or longer but not greater than
16, and checks to boggle board for instances of the word. If it finds one, it will
list each word it finds.

Boggle Project Script 

Given a 4x4 matrix of letters, and a list of words,
find all of the words from the list present in the matrix
     Boggle Rules I'm working with:
     horizontal, diagonal, and vertical movement, 
     minimum 3 letter words,
     no repeated spaces.
The project was build using 5 functions:
 1. CheckRepeats: works like a member function, sees
    if an index is in an array of other indices
 2. StepDirection: similar to a recursive wrapper, it takes 
    what is essentially a transformation double and calls 
    the recursive function with a new index in the correct
    direction. It also has the check to make sure each move
    stays on the board.
 3. RecursiveBoggleStep: The main place for recursion.
    the logic of this recursive solve is: if the word
    has no letters in it, return true; if the index 
    has a letter that doesn't match the first letter of 
    word, return false; else call StepDirection in each direction
    and or all of the results together. This will return true
    upon successfully exhausting a word and false if it cannot 
    do so. 
 4. FindGivenWord checks a 4x4 matrix for a letter matching 
    the first letter of the word it is given. If it finds one, it calls 
    RecursiveBoggleStep, and if that returns true, it returns true. This
    function might be somewhat superfluous. 
 5. UltimateBoggleSolver takes a 4x4 matrix of letters and a list of words,
    prints to the console what the given list is and what the boggle board is,
    and then iterates over the list to see if any of the words are in the 
    boggle board. If none of them are, it prints an empty array to console,
    and otherwise it prints an array of all the found words.
