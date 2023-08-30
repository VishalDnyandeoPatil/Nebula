import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Import Picker from the correct package

const GoalSettingScreen = () => {
    const [selectedGoalType, setSelectedGoalType] = useState('Weight Loss');
    const [target, setTarget] = useState('');

    const handleSave = () => {
        // Logic to save the goal information
    };

    return (
        <View>
            <Text>Set Your Fitness Goal</Text>
            <Picker
                selectedValue={selectedGoalType}
                onValueChange={(itemValue) => setSelectedGoalType(itemValue)}
            >
                <Picker.Item label="Weight Loss" value="Weight Loss" />
                <Picker.Item label="Muscle Gain" value="Muscle Gain" />
                <Picker.Item label="Cardio Fitness" value="Cardio Fitness" />
                {/* Add more goal options if needed */}
            </Picker>
            <TextInput
                placeholder="Target (e.g., Lose 10 pounds)"
                value={target}
                onChangeText={(text) => setTarget(text)}
            />
            <Button title="Save" onPress={handleSave} />
        </View>
    );
}

export default GoalSettingScreen;
