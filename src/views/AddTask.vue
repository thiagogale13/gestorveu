<template>
    <div class="add-task-container">
        <h1>Añadir Tarea</h1>
        <div class="input-group">
            <input 
                v-model="newTask" 
                @keyup.enter="addTask" 
                placeholder="Añadir nueva tarea" 
                class="task-input"
            />
            <button @click="addTask" class="add-button">Añadir</button>
        </div>

        <div v-if="tasks.length > 0" class="task-list">
            <div v-for="task in tasks" :key="task.id" class="task-item">
                <span :class="{ completed: task.completed }">{{ task.todo }}</span>
                <div>
                    <button @click="toggleTaskCompletion(task)" class="check-button">
                        <i class="fa" :class="task.completed ? 'fa-times' : 'fa-check'"></i>
                    </button>
                    <button @click="deleteTask(task)" class="delete-button">
                        <i class="fa fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TaskList",
    data() {
        return {
            tasks: [], // Lista de tareas
            newTask: "", // Nueva tarea a agregar
        };
    },
    methods: {
        // Agregar una tarea
        addTask() {
            if (this.newTask.trim()) {
                this.tasks.push({
                    id: Date.now(), // ID único con la fecha
                    todo: this.newTask,
                    completed: false,
                });
                this.newTask = ""; // Limpiar el campo de entrada
            }
        },
        
        // Cambiar estado de completada a no completada
        toggleTaskCompletion(task) {
            task.completed = !task.completed;
        },
        
        // Eliminar tarea
        deleteTask(task) {
            this.tasks = this.tasks.filter(t => t.id !== task.id);
        },
    },
};
</script>

<style scoped>
/* Estilos para el contenedor de la tarea */
.add-task-container {
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    max-width: 400px;
    margin: 0 auto;
}

.input-group {
    display: flex;
    gap: 10px;
}

.task-input {
    padding: 10px;
    width: 80%;
    border-radius: 5px;
    border: 1px solid #ccc;
}

.add-button {
    background-color: #42b983;
    color: white;
    padding: 10px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
}

.add-button:hover {
    background-color: #367c52;
}

.task-list {
    margin-top: 20px;
}

.task-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.completed {
    text-decoration: line-through;
    color: #ccc;
}

.check-button,
.delete-button {
    background: none;
    border: none;
    cursor: pointer;
}

.check-button i {
    font-size: 20px;
    color: #42b983;
}

.check-button i:hover {
    color: #367c52;
}

.delete-button i {
    font-size: 20px;
    color: #e74c3c;
}

.delete-button i:hover {
    color: #c0392b;
}
</style>
