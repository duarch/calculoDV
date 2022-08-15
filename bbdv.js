function calcDVPause (){
    var input = prompt("Digite um número:");
    var numBase = Number(input);
    var base = 2
    var sum = 0
    var digmod = 11
    function extractDigit(num, index){
        return Math.floor(num / Math.pow(10, index)) % 10;
    }

    function digitCount(num){
        if (num === 0) return 1;
        return Math.floor(Math.log10(num)) + 1;
    }

    function digitNew(num){
        var numDigits = digitCount(num);
        for (var i = 0; i < numDigits; i++){
            var digit = extractDigit(num, i);
            sum += digit * base
            base++;
        }
        var mod = sum % digmod;
        console.log(mod);
        if (mod === 1){
            sum = "X"
        } else {
            if (mod === 11){
                sum = 0
            } else {
                sum = digmod - mod
            }
        }
        base = 2
        dvcalc = sum
        sum = 0
        return dvcalc;
    }
    var result = digitNew(numBase);
    

    alert("O digito é " + result + "\n " + numBase + "-" + result);
    
}
