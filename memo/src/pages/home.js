import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NewTaskItem from '../components/new-task-item';
import TasksList from '../components/tasks-list';

const defaultTasks = [
  {
    id: 1,
    title: 'task 0',
    done: false,
  },
  {
    id: 2,
    title: 'task 1',
    done: true,
  },
  {
    id: 3,
    title: 'task 2',
    done: false,
  },
];

const Home = () => {
  const [tasks, setTasks] = useState(defaultTasks);

  const addNewTask = title => {
    const newTask = {
      id: new Date().getTime(),
      title,
      done: false,
    };
    setTasks(currentTasks => [...currentTasks, newTask]);
  };

  const deleteTask = task => {
    setTasks(currentTasks => [
      ...currentTasks.filter(({id}) => id !== task.id),
    ]);
  };

  const editTask = ({id, title, done}) => {
    setTasks(currentTasks => [
      ...currentTasks.map(task =>
        task.id === id ? {...task, title, done} : task,
      ),
    ]);
  };

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <NewTaskItem onSubmit={addNewTask} />
      <TasksList tasks={tasks} onUpdate={editTask} onDelete={deleteTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'antiquewhite',
    marginTop: 32,
  },
});

export default Home;
