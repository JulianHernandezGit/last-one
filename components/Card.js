// Importación de las bibliotecas necesarias
import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';

// Componente de tarjeta
function ProfileCard({ profile }) {
  return (
    <Card>
      <Card.Title>{profile.name}</Card.Title>
      <Card.Divider/>
      <Card.Image source={{ uri: profile.image }}>
        <Text style={{marginBottom: 10}}>
          {profile.bio}
        </Text>
      </Card.Image>
    </Card>
  );
}

export default ProfileCard;
