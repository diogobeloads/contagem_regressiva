// Definindo a data do aniversário
const birthdayDate = new Date("September 6, 2025 00:00:00").getTime();

// Atualizando a contagem regressiva a cada 1 segundo
const countdownInterval = setInterval(function () {
  const now = new Date().getTime();
  const distance = birthdayDate - now;

  // Cálculos para dias, horas, minutos e segundos
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Exibindo a contagem regressiva na página
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // Quando o contador chegar a zero, exibe uma mensagem
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.querySelector("h1").innerText = "Feliz Aniversário!";
    document.querySelector("p").innerText = "Hoje é o seu dia!";
    document.getElementById("countdown").style.display = "none";
  }
}, 1000);
