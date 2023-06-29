import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import GoalItems from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) =>
    [...currentCourseGoals, {text: enteredGoalText, key: Math.random().toString() }]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput buttonPress={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={itemData => {
            return <GoalItems text={itemData.item.text} />
          }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5
  }
});
