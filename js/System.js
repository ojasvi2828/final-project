class System{

    constructor(){}

    authenticate(actualCode,enteredCode){
        if(actualCode === enteredCode.toLowerCase()) {
             return true
        }
        else{
            return false
        }
    }

}
