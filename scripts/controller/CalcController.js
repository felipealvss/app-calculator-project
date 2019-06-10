
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
        this.initButtonsEvents();
    }

    // Elements to be started when instantiating a new object of this class 
    initialize(){

        this.setDisplayDateTime();
        // Arrow Function ("new" feature) executing the method "setInterval" in a defined time interval . In here, using the currentDate method. 
        setInterval( () => {

            this.setDisplayDateTime();
        },1000 /* Time interval defined in milisseconds */ )

    }

    // This method will work with the "initButtonsEvents"
    addEventListenerAll(element, event, arrowFunc){

        event.split(' ').forEach(event => {

            // "addEventListener" is a own Javascript method 
            element.addEventListener(event, arrowFunc, false);
        })
    }

    // this method is responsible to get the interation in the buttons and show what was interacted
    initButtonsEvents(){
        let buttons = document.querySelectorAll('#buttons g, #parts g');

        buttons.forEach( (btn, index) => {

            // the method "addEventListener" only support 1 interaction, in this occasion we do a new method called "addEventListenerAll" to work with others occasions, making this function more versatile
            this.addEventListenerAll(btn, 'click drag', evenFnc => {

                console.log(btn.className.baseVal.replace('btn-',''));
            })

            // This function change the mouse style 
            this.addEventListenerAll(btn, 'mouseover mouseup mousedown', evenFnc => {

                btn.style.cursor = 'pointer';
            })
        })
    }

    // Here we work with the date and time
    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
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
