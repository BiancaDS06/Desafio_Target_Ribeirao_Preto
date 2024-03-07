function estadoInicial() {
    return [false, false, false]; 
}

function alternarInterruptor(estado, interruptor) {
    estado[interruptor] = !estado[interruptor]; 
}


function verificarLampadas(estado) {
    console.log("Estado das lâmpadas:", estado.map(lampada => lampada ? "ligada" : "apagada"));
}

function descobrirInterruptores() {
  
    let estadoLampadas = estadoInicial();

    alternarInterruptor(estadoLampadas, 0);

    alternarInterruptor(estadoLampadas, 1);

    verificarLampadas(estadoLampadas);
}

descobrirInterruptores();
