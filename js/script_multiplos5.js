let frase = "";
for(let i = 0; i < 20; i++) {
    if(i % 5 == 0) {
        frase = frase + "O valor é " + i + "<br>";
        continue;
    }
    
}
document.getElementById("demonstra_valores").innerHTML = frase;