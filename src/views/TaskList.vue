<template>
    <div>
      <h1>Lista de Tareas</h1>
      <button @click="fetchTasks">Cargar Tareas</button>
  
      <div v-if="tasks.length > 0">
        <div 
          v-for="task in tasks" 
          :key="task.id" 
          class="task-container">
          
          <div class="task-content">
            <h5 :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">
              {{ task.todo }}
            </h5>
            
            <!-- Estado de la tarea -->
            <span :class="{'task-pending': !task.completed, 'task-completed': task.completed}">
              {{ task.completed ? 'Completada' : 'Pendiente' }}
            </span>
          </div>
  
          <!-- Botones de completar y eliminar -->
          <div class="task-actions">
            <button @click="toggleTaskCompletion(task)">
              <i class="fa fa-check"></i> <!-- Icono de completar -->
            </button>
            <button @click="deleteTask(task)">
              <i class="fa fa-trash"></i> <!-- Icono de eliminar -->
            </button>
          </div>
        </div>
      </div>
      
      <div v-else>
        <p>No hay tareas disponibles.</p>
      </div>
    </div>
  </template>
  
  <script>
  // Importando Axios para hacer solicitudes HTTP
  import axios from 'axios';
  
  export default {
    name: "TaskList",
    data() {
      return {
        tasks: [], // Almacenamiento de las tareas
      };
    },
    methods: {
      // Llamada para obtener las tareas desde la API externa
      async fetchTasks() {
        try {
          const response = await axios.get('https://dummyjson.com/todos');
          this.tasks = response.data.todos; // Asignamos las tareas al arreglo tasks
        } catch (error) {
          console.error('Error al cargar las tareas:', error);
        }
      },
  
      // Cambiar el estado de una tarea (completada/no completada)
      toggleTaskCompletion(task) {
        task.completed = !task.completed;
      },
  
      // Eliminar la tarea seleccionada
      deleteTask(task) {
        this.tasks = this.tasks.filter((t) => t.id !== task.id); // Filtra la tarea eliminada
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos para el componente */
  h1 {
    color: #333;
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: center;
  }
  
  button {
    background-color: #42b983;
    color: white;
    border: none;
    padding: 8px 15px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #367c52;
  }
  
  h5 {
    font-size: 1.2rem;
  }
  
  span {
    display: block;
    margin-top: 5px;
    font-weight: bold;
    text-align: center;
  }
  
  /* Estilo del rectángulo donde se encuentran las tareas */
  .task-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f8f8f8;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 10px;
    width: 80%;
    margin: 0 auto;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .task-content {
    flex-grow: 1;
  }
  
  .task-actions {
    display: flex;
    gap: 10px;
  }
  
  /* Colores para los estados de las tareas */
  .task-pending {
    background-color: #f9c74f;
    color: #333;
    padding: 5px 10px; /* Reducido padding */
    border-radius: 12px;
    font-size: 0.8rem; /* Reducido font-size */
    text-align: center;
  }
  
  .task-completed {
    background-color: #90be6d;
    color: white;
    padding: 5px 10px; /* Reducido padding */
    border-radius: 12px;
    font-size: 0.8rem; /* Reducido font-size */
    text-align: center;
  }
  
  /* Iconos */
  button i {
    font-size: 20px;
  }
  
  /* Icono de eliminar (rojo) y completar (verde) */
  .task-actions button:first-child i {
    color: #90be6d; /* Verde para completar */
  }
  
  .task-actions button:last-child i {
    color: #e63946; /* Rojo para eliminar */
  }
  
  /* Asegura que los botones se alineen a la derecha */
  .task-actions button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
  }
  
  .task-actions button:hover {
    color: #367c52;
  }
  </style>
  