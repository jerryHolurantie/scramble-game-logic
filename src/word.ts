export enum HintLevel{ 'EASY', 'LIGHT', 'MEDIUM', 'EXTERME' }

export interface Hint {
    char: String;
    pos: Number; 
} 

export class Word {

    public word: String;
    public scramWord: String;

    constructor(word: String) {
        this.word = word;
        this.scramWord = this.scrambleWord();
    }

    private scrambleWord(): String {
        return this.word.split('').sort(function () {
            return 0.5 - Math.random();
        }).join('');
    }

    public hintWord(level: HintLevel): Hint[] | null {
        let seed: Number,
            result: Hint[] = [];

        switch (level){
            case HintLevel.EASY:
                seed = Math.floor(this.scramWord.length * 0.2);
                break;
            case HintLevel.LIGHT:
                seed = Math.floor(this.scramWord.length * 0.4);
                break;
            case HintLevel.MEDIUM:
                seed = Math.floor(this.scramWord.length * 0.6);
                break;
            case HintLevel.EXTERME:
                seed = Math.floor(this.scramWord.length * 0.8);
                break;
            default:
                seed = 0;
        }

        if (seed === 0) return null

        for (let i = 0; i < seed; i++){
            let choice = this.word[Math.floor(Math.random() * this.word.length)];
            let temp: Hint = {
                    char: choice,
                    pos: this.word.indexOf(choice)
            } 

            result.push(temp);
        }
        
        return result;  
    }
    
}