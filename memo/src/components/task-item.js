import React, {useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import IconButton from './icon-button';
import TaskEditor from './task-editor';

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
  },
  button: {
    fontSize: 24,
    marginRight: '2%',
  },
  taskText: {
    flex: 1,
    color: 'green',
    fontSize: 20,
  },
  taskTextDone: {
    flex: 1,
    color: 'gray',
    textDecorationLine: 'line-through',
    fontSize: 20,
  },
});

const TaskItem = ({task, onUpdate, onDelete}) => {
  const [isEditing, setIsEditing] = useState(false);

  const taskTextStyle = task.done ? styles.taskTextDone : styles.taskText;

  const submitTask = title => {
    onUpdate({...task, title});
    setIsEditing(false);
  };

  const cancelEditing = () => {
    setIsEditing(false);
  };

  const taskInput = (
    <TaskEditor
      value={task.title}
      onSubmit={submitTask}
      onCancel={cancelEditing}
      isEditing={isEditing}
    />
  );

  return (
    <View style={styles.taskContainer}>
      {taskInput}
      {!isEditing && (
        <IconButton
          iconName="edit"
          onPress={() => setIsEditing(true)}
          style={styles.button}
        />
      )}
      <IconButton
        iconName="trash"
        onPress={() => onDelete(task)}
        style={styles.button}
      />
    </View>
  );
};

export default TaskItem;
