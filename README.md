# Calculo de DV do Banco do Brasil

## Para agências e contas

### Bookmarklet

```
javascript:(function()%7Bvar%20n%3DNumber(prompt(%22Digite%20um%20n%C3%BAmero%3A%22))%3Bfunction%20calcDV(r)%7Bfor(var%20o%3D2%2Ca%3D0%2Ct%3D0%3Bt%3CMath.floor(Math.log10(r))%2B1%3Bt%2B%2B)a%2B%3DMath.floor(r%2FMath.pow(10%2Ct))%2510*o%2Co%2B%2B%3Breturn%20a%3D1%3D%3D%3D(a%3Da%2511)%3F%22X%22%3A0%3D%3D%3Da%3F0%3A11-a%7Dvar%20r%3DcalcDV(n)%3Balert(%22O%20d%C3%ADgito%20%C3%A9%20%22%2Br%2B%22%5Cn%22%2Bn%2B%22-%22%2Br)%7D)()
```

### Compressed

```js
var n=Number(prompt("Digite um número:"));function calcDV(r){for(var o=2,a=0,t=0;t<Math.floor(Math.log10(r))+1;t++)a+=Math.floor(r/Math.pow(10,t))%10*o,o++;return a=1===(a=a%11)?"X":0===a?0:11-a}var r=calcDV(n);alert("O dígito é "+r+"\n"+n+"-"+r);

```

### Javascript
```js
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

```