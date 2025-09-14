function calcularTempoRestante(dataFutura) {
  const agora = new Date().getTime();
  const alvo = dataFutura.getTime();
  const diferenca = alvo - agora;

  if (diferenca <= 0) {
    return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
  }

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  return { dias, horas, minutos, segundos };
}

function atualizarTemporizador() {
  const t = calcularTempoRestante(dataFutura);
  document.getElementById("dias").textContent = t.dias;
  document.getElementById("horas").textContent = t.horas;
  document.getElementById("minutos").textContent = t.minutos;
  document.getElementById("segundos").textContent = t.segundos;

  if (!t.dias && !t.horas && !t.minutos && !t.segundos) {
    clearInterval(intervalo);
  }
}

// Data futura desejada
const dataFutura = new Date("2025-12-31T23:59:59");

// Atualiza a cada segundo
const intervalo = setInterval(atualizarTemporizador, 1000);

// Executa a primeira vez imediatamente
atualizarTemporizador();