import React, { Component, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

class test extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    render() {
        const [enteredGoal, setEnteredGoal] = useState('')
        const [courseGoal, setCourseGoal] = useState([])
        const goalInputHandler = (enteredText) => {
            setEnteredGoal(enteredText)
        }
        const addGoalHandler = () => {
            setCourseGoal(currentGoal => [...currentGoal, enteredGoal])
        }
        return (
            <View style={styles.screen}>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder='Course Goal'
                        style={styles.input}
                        onChangeText={goalInputHandler}
                        value={enteredGoal}
                    />
                    <Button title='ADD' onPress={addGoalHandler} />
                </View>
                <View>
                    {courseGoal.map(goal => (
                        <View key={goal} style={styles.listItem}> <Text >{goal}</Text>
                        </View>
                    ))}
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    screen: {
        padding: 50,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    },
    listItem: {
        padding: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
})
export default test;
