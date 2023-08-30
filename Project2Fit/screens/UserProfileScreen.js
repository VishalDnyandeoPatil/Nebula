import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Import Picker from the correct package
import { useNavigation } from '@react-navigation/native';

const UserProfileScreen = () => {
    const [selectedGender, setSelectedGender] = useState('Male'); // Default to Male

    const handleSave = () => {
        // Logic to save user input
    };

    return (
        <View>
            <Text>Introduce Yourself</Text>
            <TextInput placeholder="Name" />
            <TextInput placeholder="Age" />
            <Picker
                selectedValue={selectedGender}
                onValueChange={(itemValue) => setSelectedGender(itemValue)}
            >
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
                <Picker.Item label="Other" value="Other" />
            </Picker>
            <Button title="Save" onPress={handleSave} />
        </View>
    );
}

export default UserProfileScreen;
