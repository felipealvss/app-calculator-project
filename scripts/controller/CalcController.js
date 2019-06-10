
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
        this._operation = [];
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

    // Methods that evolves math operations with the buttons and display informations
    addOperation(numberValue){
        
        if (isNaN(this.lastItem())) {
        // String or other value
        
            if(this.isOperator()){

            }
        } else {
        // Integer
            let newValue = this.lastItem().toString() + numberValue.toString();
            this._operation.push(newValue);
        }
        
        console.log(this._operation);
    }
    
    lastItem(){
        return this._operation[this._operation.length - 1];
    }

    isOperator(){

    }

    clearAll(){
        
        this._operation = [];
    }

    clearEntry(){
        
        this._operation.pop();
    }

    // Invalid entry or return
    setError(){

        this.displayCalc = 'Error';
    }
    
    execBtn(execBtn){

        switch(execBtn){

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
                this.addOperation(parseInt(execBtn));
            break;
            
            case 'ac':
                this.clearAll();
            break;

            case 'ce':
                this.clearEntry();
            break;

            case 'porcento':

            break;

            case 'divisao':

            break;

            case 'multiplicacao':

            break;

            case 'subtracao':

            break;
            
            case 'soma':

            break;

            case 'igual':

            break;

            case 'ponto':

            break;

            default:
                this.setError();
            break;
        }
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

        buttons.forEach( btn => {

            // the method "addEventListener" only support 1 interaction, in this occasion we do a new method called "addEventListenerAll" to work with others occasions, making this function more versatile
            this.addEventListenerAll(btn, 'click drag', evenFnc => {

                let textBtn = btn.className.baseVal.replace('btn-','');
                this.execBtn(textBtn);
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
