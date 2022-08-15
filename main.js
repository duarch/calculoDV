function calcDVX (){
    var n = Number(prompt("Digite um número:"));
    function calcDV(n){
        var b = 2
        var s = 0
        for (var i = 0; i < Math.floor(Math.log10(n)) + 1; i++){
            var d = Math.floor(n / Math.pow(10, i)) % 10;
            s += d * b
            b++;
        }
        var s = s % 11
        if (s === 1){
            s = "X"
        } else {
            if (s === 0){
                s = 0
            } else {
                s = 11 - s
            }
        }
        return s;
    }
    var r = calcDV(n);
    alert("O dígito é " + r + "\n" + n + "-" + r)
}