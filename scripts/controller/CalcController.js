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
        this.initButtonsEvents();
    }

    initialize() {

        this.setDisplayDateTime();

        setInterval(() => {

            this.setDisplayDateTime();

        }, 1000);
 
    }

    addEventListenerAll(element, events, fn){
        
        let array = events.split(' ');

        array.forEach(event => {
            element.addEventListener(event, fn, false);
        });

    }

    initButtonsEvents(){
        
        let buttons = document.querySelectorAll('#buttons > g, #parts > g'); //getting all elements with button id or parts id
        
        buttons.forEach((btn, index) => {
            this.addEventListenerAll(btn, "click drag", e => {
                console.log(btn.className.baseVal.replace("btn-", ""));
            })

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {
                btn.style.cursor = "pointer";
            });
        });
        
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