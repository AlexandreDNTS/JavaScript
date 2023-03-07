/*definido as variáveis*/
let minutos = 0;
let segundos = 0;
let milissegundos = 0;
let cronometro;
/*unções para iniciar, parar e reiniciar o cronômetro.*/

/*A função iniciarCronometro usa setInterval para atualizar o cronômetro a 
cada 10 milissegundos. Ele atualiza os valores de minutos, segundos e 
milissegundos e chama a função atualizarCronometro para exibir os valores 
atualizados na tela. */
function iniciarCronometro() {
    cronometro = setInterval(() => {
        milissegundos += 10;
        if (milissegundos == 1000) {
            milissegundos = 0;
            segundos++;
        }
        if (segundos == 60) {
            segundos = 0;
            minutos++;
        }
        atualizarCronometro();
    }, 10);
}
/*A função pararCronometro usa clearInterval para parar o cronômetro. */
function pararCronometro() {
    clearInterval(cronometro);
}
/*A função reiniciarCronometro redefine os valores de minutos, segundos e
milissegundos para zero e chama a função atualizarCronometro.*/
function reiniciarCronometro() {
    minutos = 0;
    segundos = 0;
    milissegundos = 0;
    atualizarCronometro();
}
/*A função atualizarCronometro exibe os valores de minutos, segundos e 
milissegundos formatados na tela. Ele usa a função textContent para atualizar 
o conteúdo das tags span correspondentes */
function atualizarCronometro() {
    const minutosTexto = minutos < 10 ? '0' + minutos : minutos;
    const segundosTexto = segundos < 10 ? '0' + segundos : segundos;
    const milissegundosTexto = milissegundos < 10 ? '00' + milissegundos : (milissegundos < 100 ? '0' + milissegundos : milissegundos);
    document.getElementById('minutos').textContent = minutosTexto;
    document.getElementById('segundos').textContent = segundosTexto;
    document.getElementById('milissegundos').textContent = milissegundosTexto;
}
