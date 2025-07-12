AOS.init();

const dataEvento = new Date("junho 28, 2025 23:00:00");
const timeStampEvento = dataEvento.getTime();

const contador = setInterval( function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteEvento = timeStampEvento - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60 ;
    const minutosEmMs = 1000 * 60;

    const diasAteEvento = Math.floor(distanciaAteEvento / diasEmMs);
    const horasAteEvento = Math.floor(distanciaAteEvento % diasEmMs / horasEmMs);
    const minutosAteEvento = Math.floor(distanciaAteEvento % horasEmMs / minutosEmMs);
    const segundosAteEvento = Math.floor(distanciaAteEvento % minutosEmMs / 1000);

    document.getElementById('contador').innerHTML = `Faltam ${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;

    if (distanciaAteEvento < 0) {
        clearInterval(contador);
        const timer = document.getElementById('contador');
        timer.innerHTML = 'EVENTO EXPIROU';
        timer.classList.add('contador--expired');
    }

}, 1000);