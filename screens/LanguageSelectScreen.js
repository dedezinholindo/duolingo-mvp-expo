import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const languages = [
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
];

export default function LanguageSelectScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Language</Text>
      {languages.map(lang => (
        <Button
          key={lang.code}
          title={lang.name}
          onPress={() => navigation.replace('Home', { language: lang })}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
}); 
