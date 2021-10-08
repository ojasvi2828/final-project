class System{

    constructor(){}

    authenticate(actualCode,enteredCode){
        if(actualCode === enteredCode.toUpperCase()) {
           console.log("correct")
            return true
        }
        else{
            return false
        }
    }

}
