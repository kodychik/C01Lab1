import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';

const ToDoList = ({toDos}) => {

    const [tasks, setTasks] = useState(toDos.map((value) => ({ id: uuidv4(), task: value })));

    const addToDo = (newTitle) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? {...task, todo: newTitle } : task
            )
        );
    };

    const removeToDo = (id) => {
        setTasks((prevTasks) =>
            prevTasks.filter((t) => t.id != id)
        );
    };

    const addTask = (toDo) => {
        const newTask = { id: uuidv4(), task: toDo };
        setTasks((prevTasks) => [...prevTasks, newTask]);
      };

    return (
            <View style={styles.todoListContainer}>
                {tasks.map((task) => (
                    <View key={task.id} >
                        
                        <View style={styles.todoItem}>
                            <Text>{task.task}</Text>
                            <Button title="Remove" onPress={() => removeToDo(task.id)} />
                        </View>
                    </View>

                )
                
                )}
                <AddTask onAddTask={addTask} />
            </View>  
        
        
    );

    ToDoList.defaultProps = {
        toDos: [0],
    };
};

const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
});

export default ToDoList;