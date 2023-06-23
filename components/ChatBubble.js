// Importación de las bibliotecas necesarias
import React from 'react';
import { View, Text } from 'react-native';
import { Bubble } from 'react-native-gifted-chat';

// Componente de burbuja de chat
function ChatBubble({ message, isOwnMessage }) {
  return (
    <Bubble
      wrapperStyle={{
        right: {
          backgroundColor: isOwnMessage ? '#2089dc' : '#f0f0f0',
        },
      }}
      textStyle={{
        right: {
          color: isOwnMessage ? '#fff' : '#000',
        },
      }}
      timeTextStyle={{
        right: {
          color: '#fff',
        },
        left: {
          color: '#000',
        },
      }}
      {...message}
    />
  );
}

export default ChatBubble;
