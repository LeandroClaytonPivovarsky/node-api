
module.exports = class Termodinamica{
    toCelcius(temperatura, escala){
        var temperaturaFinal;
        if (escala == 'K') {
            temperaturaFinal = temperatura - 273; 
        }else if(escala == 'F'){
            temperaturaFinal = (temperatura-32)/1.8;
        }

        return temperaturaFinal+"C";
    }

    toFahrenheit(temperatura,escala){
        var temperaturaFinal;
        
        if (escala == 'K') {
            temperaturaFinal = (temperatura - 273)  * 1.8+ 32; 
            
        }else if(escala == 'C'){
            temperaturaFinal = temperatura*1.8+32;
            
        }

        return temperaturaFinal+"F";
    }

    toKelvin(temperatura,escala){
        var temperaturaFinal;
        if (escala == 'C') {
            temperaturaFinal = temperatura + 273; 
        }else if(escala == 'F'){
            temperaturaFinal = (temperatura-32) * 5/9 + 273;  
        }
        return temperaturaFinal+"K";
    }
}

