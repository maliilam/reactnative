import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import IconButton from './icon-button';

const styles = StyleSheet.create({
  TextInputContainer: {
    flexDirection: 'row',
    width: '80%',
  },
  textInput: {
    flex: 1,
    color: 'gray',
    fontSize: 24,
    marginRight: '5%',
  },
  editorButton: {
    color: 'black',
    fontSize: 24,
    marginRight: '2%',
  },
  disabledButton: {
    color: 'gray',
  },
});

const TaskEditor = ({value, onSubmit, onCancel, isEditing}) => {
  const [title, setTitle] = useState(value ?? '');

  const enableSubmit = title && title.trim();

  const submitTask = () => {
    setTitle(title.trim());
    if (enableSubmit) {
      onSubmit(title);
    }
  };

  const cancelTask = () => {
    setTitle(value);
    onCancel();
  };

  return (
    <View style={styles.TextInputContainer}>
      <TextInput
        style={styles.textInput}
        value={title}
        editable={isEditing}
        autoFocus={isEditing}
        onChangeText={setTitle}
        onSubmitEditing={submitTask}
        placeholder="New task title..."
      />
      {isEditing && (
        <>
          <IconButton
            iconName="check-circle"
            onPress={submitTask}
            style={[
              styles.editorButton,
              !enableSubmit && styles.disabledButton,
            ]}
          />
          <IconButton
            iconName="times-circle"
            onPress={cancelTask}
            style={styles.editorButton}
          />
        </>
      )}
    </View>
  );
};

export default TaskEditor;
