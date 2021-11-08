import { Word, HintLevel } from './word'

const word = new Word('accurate');
console.log(word.scramWord);
console.log(word.hintWord(HintLevel.MEDIUM))