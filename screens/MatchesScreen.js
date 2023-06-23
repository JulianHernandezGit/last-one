// Importación de las bibliotecas necesarias
import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { getMatches } from '../actions/matchActions';

// Pantalla de matches
function MatchesScreen() {
  const dispatch = useDispatch();
  const matches = useSelector(state => state.matches.matches);

  // Obtener los matches cuando se carga la pantalla
  useEffect(() => {
    dispatch(getMatches());
  }, [dispatch]);

  return (
    <View>
      <FlatList
        data={matches}
        keyExtractor={match => match.id}
        renderItem={({ item }) => (
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
              <ListItem.Subtitle>{item.bio}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        )}
      />
    </View>
  );
}

export default MatchesScreen;
