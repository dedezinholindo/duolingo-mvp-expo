import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Example question for MVP
const questionData = {
  question: 'How do you say "Hello" in Spanish?',
  options: ['Hola', 'Bonjour', 'Hallo'],
  correct: 0,
};

export default function LessonScreen({ route, navigation }) {
  const { lesson, language } = route.params;
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [answered, setAnswered] = useState(false);

  const handleAnswer = idx => {
    setSelected(idx);
    if (idx === questionData.correct) {
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect.');
    }
    setAnswered(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{lesson.name} Lesson</Text>
      <Text style={styles.question}>{questionData.question}</Text>
      {questionData.options.map((opt, idx) => (
        <Button
          key={opt}
          title={opt}
          onPress={() => handleAnswer(idx)}
          disabled={answered}
        />
      ))}
      {feedback ? <Text style={styles.feedback}>{feedback}</Text> : null}
      {answered && (
        <Button title="Back to Home" onPress={() => navigation.popToTop()} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  question: {
    fontSize: 18,
    marginBottom: 24,
  },
  feedback: {
    fontSize: 18,
    marginTop: 24,
    fontWeight: 'bold',
  },
}); 
