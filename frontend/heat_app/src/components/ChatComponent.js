import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ScrollView } from 'react-native';

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    // Add an initial message from the AI assistant
    setMessages([{ role: 'assistant', content: "Hallo! Ich bin Dein persoenlicher Assistent und moechte dich bei jeder Frage rund ums Thema Leben in konstanter Hitze unterstutzen!" }]);
  }, []); // Run once on component mount

  const handleSendMessage = async () => {
    if (inputText.trim() === '') return;

    //only testing
    setMessages([...messages, { role: 'user', content: inputText }, { role: 'assistant', content: 'HARDCODED RESPONSE - TODO INTEGRATE BACKEND CALL' }]);
    setInputText('');
    return;

    // Replace 'YOUR_BACKEND_ENDPOINT' with your actual backend server endpoint
    const backendEndpoint = 'YOUR_BACKEND_ENDPOINT';

    try {
      const response = await fetch(backendEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages, inputText }),
      });

      if (response.ok) {
        const result = await response.json();
        setMessages([...messages, { role: 'user', content: inputText }, { role: 'assistant', content: result.reply }]);
        setInputText('');
      } else {
        console.error('Error sending message to backend');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.chatContainer}>
        {messages.map((message, index) => (
          <View key={index} style={message.role === 'user' ? styles.userMessage : styles.assistantMessage}>
            <Text>{message.content}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={inputText}
          onChangeText={(text) => setInputText(text)}
        />
        <Button title="Send" onPress={handleSendMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatContainer: {
    flex: 1,
    padding: 10,
  },
  userMessage: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    marginBottom: 5,
    alignSelf: 'flex-end',
    borderRadius: 8,
    maxWidth: '80%',
  },
  assistantMessage: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 5,
    alignSelf: 'flex-start',
    borderRadius: 8,
    maxWidth: '80%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
});

export default ChatComponent;
