<template>
  <div id="app">
    <!-- Barra de navegación con enlaces a diferentes rutas -->
    <ul class="nav nav-pills">
      <li class="nav-item">
        <router-link to="/" class="nav-link">Inicio</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/addtask" class="nav-link">Agregar Tarea</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/tasklist" class="nav-link">Lista de Tareas</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/combinedview" class="nav-link">Vista Combinada</router-link>
      </li>
    </ul>
    <!-- Aquí se cargará el componente correspondiente a la ruta seleccionada -->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* Estilos para la barra de navegación */
.nav-pills {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.nav-pills .nav-link {
  background-color: #4caf50; /* Verde principal */
  color: white; /* Texto blanco */
  border-radius: 50px; /* Forma redondeada tipo pastilla */
  padding: 10px 20px; /* Espaciado interno */
  margin: 5px; /* Separación entre botones */
  text-decoration: none; /* Elimina el subrayado */
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease; /* Animación suave */
}

.nav-pills .nav-link:hover {
  background-color: #388e3c; /* Verde oscuro al pasar el mouse */
  color: #e8f5e9; /* Texto más claro al pasar el mouse */
}

.nav-pills .nav-link.router-link-exact-active {
  background-color: #2e7d32; /* Verde más oscuro para el enlace activo */
  color: #e8f5e9; /* Texto claro para el enlace activo */
}
</style>
