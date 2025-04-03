import { View, Text, StyleSheet } from 'react-native';

export default function Sobre() {
  return (
    <View>
      <Text>Esta é a tela Sobre!</Text>
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
    text: {
        fontSize: 18,
        fonyweight: 'bold',
        color: '#333',
    },
})