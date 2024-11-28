<template>
    <!-- Contenedor principal del ítem de tarea -->
    <div class="task-container">
      <!-- Contenedor del título y el estado de la tarea -->
      <div class="task-header">
        <!-- Muestra el título de la tarea y aplica un estilo tachado si la tarea está completada -->
        <h5 :style="{ textDecoration: completed ? 'line-through' : 'none' }">
          {{ title }}
        </h5>
  
        <!-- Muestra si la tarea está Completada o Pendiente con colores -->
        <span :class="{'task-pending': !completed, 'task-completed': completed}">
          {{ completed ? 'Completada' : 'Pendiente' }}
        </span>
      </div>
  
      <!-- Contenedor de botones de acción -->
      <div class="task-actions">
        <!-- Botón para marcar la tarea como completada o pendiente -->
        <button @click="$emit('toggle-completion')" class="action-button">
          <i :class="{'fa fa-check': !completed, 'fa fa-undo': completed}"></i>
        </button>
  
        <!-- Botón para eliminar la tarea de la lista -->
        <button @click="$emit('delTodo')" class="action-button">
          <i class="fa fa-trash"></i>
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TodoItem',
  
    // Define las propiedades que este componente recibirá del componente padre
    props: {
      title: String,      // Título de la tarea
      completed: Boolean, // Estado de la tarea (completada o pendiente)
    }
  }
  </script>
  
  <style scoped>
  /* Estilos para el contenedor principal de la tarea */
  .task-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f4f4f4;
    padding: 12px;
    border-radius: 8px;
    margin-bottom: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  /* Estilo para el encabezado de la tarea (título y estado) */
  .task-header {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  
  /* Estilos para el estado de la tarea */
  .task-pending {
    color: #f9c74f; /* Amarillo para pendiente */
    font-weight: bold;
  }
  
  .task-completed {
    color: #90be6d; /* Verde para completada */
    font-weight: bold;
  }
  
  /* Estilo para los botones de acción */
  .task-actions {
    display: flex;
    gap: 10px;
  }
  
  /* Estilo general para los botones */
  .action-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 18px;
  }
  
  .action-button:hover {
    color: #367c52;
  }
  
  /* Iconos */
  .action-button i {
    color: #333;
    font-size: 20px;
  }
  
  .action-button:hover i {
    color: #42b983; /* Verde en el hover */
  }
  
  /* Estilo para los botones de completar y eliminar */
  .action-button:first-child i {
    color: #90be6d; /* Verde para completar */
  }
  
  .action-button:last-child i {
    color: #e63946; /* Rojo para eliminar */
  }
  </style>
  