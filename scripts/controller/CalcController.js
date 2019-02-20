class CalcController {

    constructor() {

        this._locale = 'pt-BR';

        //DOM elements
        this._elemDisplayCalc = document.querySelector('#display');
        this._elemDate = document.querySelector('#data');
        this._elemTime = document.querySelector('#hora');

        //variables 
        this._currentDate;

        this.initialize();
    }

    initialize() {

        this.setDisplayDateTime();

        setInterval(() => {

            this.setDisplayDateTime();

        }, 1000);
 
    }

    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    
    }

    get displayTime() {
        return this._elemTime.innerHTML;
    }

    set displayTime(value) {
        this._elemTime.innerHTML = value;
    }

    set displayDate(value) {
        this._elemDate.innerHTML = value;
    }

    get displayDate() {
        return this._elemDate.innerHTML;
    }

    get displayCalc() {
        return this._elemDisplayCalc.innerHTML;
    }

    set displayCalc(value) {
        this._elemDisplayCalc.innerHTML = value;
    }

    get currentDate() {
        return new Date();
    }

    set currentDate(value) {
        this._currentDate = value;
    }

}