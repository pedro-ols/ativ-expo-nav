import { View, Text, StyleSheet, Link, Pressable } from "react-native";

export default function About() {
  return (
    <View>
        <Text>Bem-vindo a tela de sobre</Text>
      <Link href="/" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Ir para Tela Inicial</Text>
        </Pressable>
      </Link>
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
  text: {
    fontSize: 18,
    fontweight: "bold",
    color: "#333",
  },
});
