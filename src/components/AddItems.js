import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useItemContext} from '../context/ItemContext';

const AddItemScreen = () => {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const {addItem} = useItemContext();
  const navigation = useNavigation();

  const handleAddItem = () => {
    if (!itemName.trim()) {
      Alert.alert('Item Name Required', 'Please enter item name.');
      return;
    }

    if (!itemDescription.trim()) {
      Alert.alert(
        'Confirm Save',
        'Are you sure you want to save without description?',
        [
          {text: 'Cancel', style: 'cancel'},
          {
            text: 'Yes',
            onPress: () => saveItem(),
          },
        ],
        {cancelable: false},
      );
    } else {
      saveItem();
    }
  };

  const saveItem = async () => {
    addItem({
      id: Math.random().toString(),
      name: itemName,
      description: itemDescription,
    });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Item Name"
        onChangeText={text => setItemName(text)}
        value={itemName}
      />
      <TextInput
        style={[styles.input, styles.descriptionInput]}
        placeholder="Item Description"
        onChangeText={text => setItemDescription(text)}
        value={itemDescription}
        multiline={true}
        numberOfLines={4}
      />
      <Button title="Add Item" onPress={handleAddItem} color="#007BFF" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  descriptionInput: {
    height: 120,
    textAlignVertical: 'top',
    paddingTop: 10,
  },
});

export default AddItemScreen;
