import { View, Text, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";

export default function About() {
  return (
    <View>
      <Text style={styles.title}>Bem-vindo a tela de sobre</Text>
      <Link href="/" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Ir para Tela Inicial</Text>
        </Pressable>
      </Link>
        <Text style={styles.texto}> Nosso app conterá alguns termos quanto ao uso e a política da aplicação </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  button: {
    backgroundColor: '#3b5998',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    fontweight: "bold",
    color: "#333",
  },
  texto: {
    fontSize: 15,
    color: "#3b5998",
    fontWeight: "bold",
    textAlign: 'center',
    marginTop: 30,
  },
});
