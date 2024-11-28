<template>
  <div class="inicio">
    <!-- Información principal -->
    <h1>Bienvenido a la Aplicación de Tareas con Vue</h1>
    <p>
      Esta aplicación te permite gestionar tus tareas de manera eficiente. Puedes añadir nuevas tareas manualmente o extraerlas desde una API.
    </p>
    <!-- Logo con estilo circular y animación al pasar el cursor -->
    <div class="logo-container">
      <img alt="Vue logo" src="../assets/logo.png" class="logo" />
    </div>
    <h2>Secciones de la Aplicación</h2>
    <ul>
      <li><strong>Añadir Tarea:</strong> Permite ingresar nuevas tareas manualmente.</li>
      <li><strong>Lista de Tareas:</strong> Muestra todas las tareas extraídas desde la API, permitiendo marcarlas como completadas o eliminarlas.</li>
      <li><strong>Vista Combinada:</strong> Combina las funcionalidades de añadir tareas manualmente y ver las tareas de la API al mismo tiempo.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
/* Contenedor del logo */
.logo-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

/* Estilo del logo */
.logo {
  width: 150px;
  height: 150px;
  border-radius: 50%; /* Forma circular */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Animación */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Efecto al pasar el cursor */
.logo:hover {
  transform: scale(1.1); /* Ampliar ligeramente */
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

/* Estilo del texto principal */
.home {
  text-align: center;
  font-family: Arial, sans-serif;
  color: #2c3e50;
  padding: 20px;
}

h1 {
  color: #42b983; /* Verde principal */
  margin-bottom: 10px;
}

p {
  margin-bottom: 20px;
}

h2 {
  color: #34495e; /* Verde oscuro */
  margin-top: 20px;
}

ul {
  text-align: left;
  margin: 0 auto;
  max-width: 600px;
  list-style: none;
  padding: 0;
}

li {
  margin: 10px 0;
  font-size: 1rem;
  color: #2c3e50;
}
</style>
