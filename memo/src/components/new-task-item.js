import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import IconButton from './icon-button';
import TaskEditor from './task-editor';

const styles = StyleSheet.create({
  newTaskButton: {
    color: 'black',
    // backgroundColor: 'lightblue',
    fontSize: 20,
    textAlign: 'justify',
    justifyContent: 'flex-start',
    marginRight: '1%',
  },
});

const NewTaskItem = ({onSubmit}) => {
  const [isEditing, setIsEditing] = useState(false);

  const submitNewTask = title => {
    onSubmit(title);
    setIsEditing(false);
  };

  const cancelNewTask = () => {
    setIsEditing(false);
  };

  const newTaskInput = (
    <TaskEditor
      onSubmit={submitNewTask}
      onCancel={cancelNewTask}
      isEditing={true}
    />
  );

  const newTaskButton = (
    <IconButton
      iconName="plus-circle"
      text={'Add new task'}
      onPress={() => {
        setIsEditing(true);
      }}
      style={styles.newTaskButton}
    />
  );

  return <>{isEditing ? newTaskInput : newTaskButton}</>;
};

export default NewTaskItem;
