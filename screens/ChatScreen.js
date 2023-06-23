// Importación de las bibliotecas necesarias
import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages, sendMessage } from '../actions/messageActions';
import ChatBubble from '../components/ChatBubble';

// Pantalla de chat
function ChatScreen({ route }) {
  const dispatch = useDispatch();
  const messages = useSelector(state => state.messages.messages);
  const [message, setMessage] = useState('');

  // Obtener los mensajes cuando se carga la pantalla
  useEffect(() => {
    dispatch(getMessages(route.params.matchId));
  }, [dispatch, route.params.matchId]);

  // Función para manejar el envío de mensajes
  const handleSendMessage = () => {
    dispatch(sendMessage(route.params.matchId, message));
    setMessage('');
  };

  return (
    <View>
      <FlatList
        data={messages}
        keyExtractor={message => message.id}
        renderItem={({ item }) => <ChatBubble message={item} isOwnMessage={item.sender === route.params.userId} />}
        />
      <Input placeholder="Escribir un mensaje" value={message} onChangeText={setMessage} />

      <Button title="Enviar" onPress={handleSendMessage} />
    </View>
  );
}

export default ChatScreen;
