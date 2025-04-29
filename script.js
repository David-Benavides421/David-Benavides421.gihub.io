document.addEventListener('DOMContentLoaded', () => {
    const messageElement = document.getElementById('message');
    const timerElement = document.getElementById('timer');

    // --- CONFIGURACIÓN DEL CONTADOR ---
    // !!! EDITA ESTA FECHA a la fecha/hora de inicio deseada !!!
    // Formato: AÑO, MES (0=Enero, 1=Febrero, ...), DÍA, HORA, MINUTO, SEGUNDO
    const startDate = new Date(2025, 2, 30, 0, 0, 0); // Ejemplo: 1 de Enero de 2023 a las 00:00:00

    function updateTimer() {
        const now = new Date();
        const diff = now - startDate; // Diferencia en milisegundos

        if (diff < 0) {
            timerElement.textContent = "¡La fecha aún no ha llegado!";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        timerElement.textContent =
            `${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`;
    }

    // Actualizar el contador inmediatamente y luego cada segundo
    updateTimer();
    setInterval(updateTimer, 1000);


    // --- EFECTO DE TIPEO ---
    const messages = [
        "🍬Para mi Terroncito:🍬",
        "El dia de hoy completamos nuestro primer mes juntos y estoy agradecido por eso",
        "Por conocerte y que llegaras a mi vida a hacerla mas bonita",
        "Y aunque pueda parecer poco tiempo, para mí ha sido suficiente para confirmar que eres alguien muy especial.",
        "Espero yo tambien ser asi de especial, ojala pudieras verte atraves de mis ojos y darte cuenta", // Mensaje del video
        "A ratos siento que no soy lo que quieres o no lo sé, pero me sigo aferrando a el amor que siento por ti",
        "En este corto tiempo me has enseñado lo bonito que es conectar con alguien,",
        "confiar, reír, soñar y construir recuerdos que ya atesoro con todo mi corazón.",
        "Me estabas enseñando a bailar jaja ame eso y como senti contigo al hacerlo",
        "Gracias por ser tú, por tu cariño, los momentos bonitos y tu forma de hacerme sentir",
        "Y aunque mal geniada, peleona y desinteresada a ratos asi te quiero y seras mi 💕concentida💕",
        "A ratos no te comprendo pero ",
        "Hoy, más que nunca, sé que quiero seguir descubriéndote cada día, seguir apostando por nosotros y construir algo bonito y verdadero",
        "Haz las cosas bien conmigo, y yo lo doy todo por ti y creeme que tengo mucho que dar ",
        "❤️Feliz primer mes amorcito❤️",
        "Esto apenas comienza, y me emociona todo lo que nos espera🥺",
        "Enamorasate al Inge XD jaja",
        "💖— I Love You!💖",
        "💖— I Love You!💖",
        "💞Espero este contador nunca pare ni se rompa y si llega a ser asi sabre que hice las cosas bien y de corazon💞",
        "💘Te amo Sayra💘",
    ];
    let messageIndex = 0;
    let charIndex = 0;
    const typingSpeed = 80; // Milisegundos por caracter

    function typeWriter() {
        if (messageIndex < messages.length) {
            const currentMessage = messages[messageIndex];
            if (charIndex < currentMessage.length) {
                // Añade el siguiente caracter
                messageElement.textContent += currentMessage.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, typingSpeed);
            } else {
                // Fin de la línea actual, pasar a la siguiente
                messageElement.textContent += '\n'; // Añade un salto de línea
                messageIndex++;
                charIndex = 0;
                // Pausa antes de empezar la siguiente línea (opcional)
                setTimeout(typeWriter, typingSpeed * 5);
            }
        } else {
            // Se han tipeado todos los mensajes
            // Ocultar el cursor añadiendo una clase
            messageElement.classList.add('typing-done');
        }
    }

    // Iniciar el efecto de tipeo
    typeWriter();
});