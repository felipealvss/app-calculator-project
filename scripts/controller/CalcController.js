class CalcController{

    // Defining class methods and attributes 
    constructor(){
        // Locale reference
        this._locale = 'pt-BR';
        // references to the respective items on the body HTML
        this._displayCalcDoc = document.querySelector('#display');
        this._dateDoc = document.querySelector('#data');
        this._timeDoc = document.querySelector('#hora');
        // Atributes from the class itself
        this._currentDate;
        this.initialize();
    }

    // Elements to be started when instantiating a new object of this class
    initialize(){
        // Arrow Function, "new" feature 
        setInterval( () => {
            this.displayDate = this.currentDate.toLocaleDateString(this._locale);
            this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
        }, 1000);
    }

    // Get & Set methods
    get displayCalc(){
        return this._displayCalcDoc.innerHTML;
    }

    set displayCalc(newDisplayCalc){
        this._displayCalcDoc.innerHTML = newDisplayCalc;
    }

    get displayDate(){
        return this._dateDoc.innerHTML;
    }

    set displayDate(newcurrentDate){
        this._dateDoc.innerHTML = newcurrentDate;
    }

    get displayTime(){
        return this._timeDoc.innerHTML;
    }

    set displayTime(newCurrentTime){
        this._timeDoc.innerHTML = newCurrentTime;
    }

    // Method to use the Date() method
    get currentDate(){
        return new Date();
    }

    set currentDate(newDate){
        this._currentDate = newDate;
    }
}
