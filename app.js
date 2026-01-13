document.addEventListener("DOMContentLoaded", () => {
    const formCita = document.getElementById("formCita");
    const mensaje = document.getElementById("mensaje");

    if (formCita) {
        formCita.addEventListener("submit", function (e) {
            e.preventDefault();

            // Captura de datos
            const nombre = document.getElementById("nombre").value.trim();
            const email = document.getElementById("email").value.trim();
            const servicio = document.getElementById("servicio").value;

            if (!nombre || !email || !servicio) {
                mostrarMensaje("Por favor, rellena todos los campos", "error");
                return;
            }

            const nuevaCita = { nombre, email, servicio, fecha: new Date().toLocaleString() };

            // Persistencia corregida
            let citas = JSON.parse(localStorage.getItem("citas_medicas")) || [];
            citas.push(nuevaCita);
            localStorage.setItem("citas_medicas", JSON.stringify(citas));

            // Feedback visual
            mostrarMensaje("✅ Cita registrada con éxito. Nos contactaremos pronto.", "success");
            this.reset();
        });
    }

    function mostrarMensaje(texto, tipo) {
        mensaje.innerText = texto;
        mensaje.style.color = tipo === "success" ? "#2f855a" : "#c53030";
        mensaje.style.marginTop = "15px";
        mensaje.style.fontWeight = "600";
    }
});