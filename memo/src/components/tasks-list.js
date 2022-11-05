import React from 'react';
import {FlatList} from 'react-native';
import TaskItem from './task-item';

const renderItem =
  (onUpdate, onDelete) =>
  ({item}) =>
    <TaskItem task={item} onUpdate={onUpdate} onDelete={onDelete} />;

const TasksList = ({tasks, onUpdate, onDelete}) => {
  return (
    <FlatList
      data={tasks}
      renderItem={renderItem(onUpdate, onDelete)}
      style={{marginTop: 32}}
    />
  );
};

export default TasksList;
