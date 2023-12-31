import { Button, StyleSheet, TextInput, View } from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHangler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function buttonPressHandle() {
        props.buttonPress(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
    <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal!'
          onChangeText={goalInputHangler}
          value={enteredGoalText}
        />
        <Button
          title='Add Goal'
          onPress={buttonPressHandle}
        />
    </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8
    },
});

export default GoalInput;