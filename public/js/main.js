// 📁 public/js/main.js
document.addEventListener('DOMContentLoaded', () => {
  console.log('Main.js cargado ✅');

  const formCita = document.querySelector('form[action="/citas/crear"]');
  if (formCita) {
    formCita.addEventListener('submit', (e) => {
      const idCliente = formCita.id_cliente.value.trim();
      const fecha = formCita.fecha_cita.value.trim();
      const hora = formCita.hora_cita.value.trim();
      const idServicio = formCita.id_servicio.value.trim();
      const barbero = formCita.barbero.value.trim();

      if (!idCliente || isNaN(idCliente) || idCliente <= 0) {
        alert("⚠️ El ID del cliente debe ser un número válido.");
        e.preventDefault();
        return;
      }

      if (!fecha) {
        alert("⚠️ Debes seleccionar una fecha.");
        e.preventDefault();
        return;
      }

      if (!hora) {
        alert("⚠️ Debes seleccionar una hora.");
        e.preventDefault();
        return;
      }

      if (!idServicio || isNaN(idServicio) || idServicio <= 0) {
        alert("⚠️ El ID del servicio debe ser un número válido.");
        e.preventDefault();
        return;
      }

      if (!barbero) {
        alert("⚠️ Debes ingresar el nombre del barbero.");
        e.preventDefault();
        return;
      }
    });
  }
});
