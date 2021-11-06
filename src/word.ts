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

    public hint(level: Number): String {
        return this.scramWord;
    }
}