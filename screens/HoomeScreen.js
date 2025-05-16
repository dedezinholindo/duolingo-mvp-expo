import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

const lessons = [
  { id: '1', name: 'Greetings' },
  { id: '2', name: 'Numbers' },
  { id: '3', name: 'Food' },
];

export default function HomeScreen({ route, navigation }) {
  const { language } = route.params || { language: { name: 'Spanish' } };
  // For MVP, fake progress
  const progress = 0.33;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{language.name} Lessons</Text>
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
      </View>
      <FlatList
        data={lessons}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Button
            title={item.name}
            onPress={() => navigation.navigate('Lesson', { lesson: item, language })}
          />
        )}
        style={{ width: '100%' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 24,
  },
  progressBarContainer: {
    width: '100%',
    height: 16,
    backgroundColor: '#eee',
    borderRadius: 8,
    marginBottom: 24,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4caf50',
  },
}); 
