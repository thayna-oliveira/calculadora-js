class CalcController {

    constructor() {

        this._locale = 'pt-BR';
        this._operation = [];

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

    addEventListenerAll(element, events, fn) {

        let array = events.split(' ');

        array.forEach(event => {
            element.addEventListener(event, fn, false);
        });

    }

    clearAll() {
        this._operation.clearAll();
    }

    clearEntry() {
        this._operation.pop();
    }

    setError(message) {
        this.displayCalc = message;
    }

    getLastOperation() {

        return this._operation[this._operation.length - 1];

    }

    isOperator(operator) {

        return (['+', '-', '*', '/'].indexOf(operator) > -1);

    }

    setLastOperation(operation){
        this._operation[this._operation.length - 1] = operation;
    }

    addOperation(operation) {

        if (isNaN(this.getLastOperation())) {

            if (this.isOperator(operation)) {

                this.setLastOperation(operation);

            } else if (isNaN(operation)){
                this._operation.push(operation);

            } else {
                this._operation.push(operation);
            }

        } else {

            let newValue = this.getLastOperation().toString() + operation.toString();
           
            this.setLastOperation(parseInt(newValue));

            if (this.isOperator(operation)) {

                this._operation.push(operation);

            }

        }

        console.log(this._operation);

    }

    execBtn(value) {
        switch (value) {

            case 'ac':
                this.clearAll();
                break;

            case 'ce':
                this.clearEntry();
                break;

            case 'soma':
                this.addOperation('+');
                break;

            case 'subtracao':
                this.addOperation('-');
                break;

            case 'divisao':
                this.addOperation('/');
                break;

            case 'multiplicacao':
                this.addOperation('*');
                break;

            case 'porcento':
                this.addOperation('%');
                break;

            case 'igual':
                this.clearEntry();
                break;

            case 'ponto':
                this.addOperation('.');
                break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;

            default:
                this.setError("Error");
                break;
        }

    }

    initButtonsEvents() {

        let buttons = document.querySelectorAll('#buttons > g, #parts > g'); //getting all elements with button id or parts id

        buttons.forEach((btn, index) => {
            this.addEventListenerAll(btn, "click drag", e => {

                let btnText = btn.className.baseVal.replace("btn-", "");

                this.execBtn(btnText);

            })

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {
                btn.style.cursor = "pointer";
            });
        });

    }

    setDisplayDateTime() {

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