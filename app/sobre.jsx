import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image
} from "react-native";
import { Link } from "expo-router";

export default function About() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
          <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT1GKzeyA9THE363YTL6xJDYqvCDMs2d1zlw&s"}} style={styles.image}></Image>
      </View>

      <Text style={styles.title}>Bem-vindo a tela de sobre</Text>
      <Link href="/" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Ir para Tela Inicial</Text>
        </Pressable>
      </Link>
      <Text style={styles.texto}>
        {" "}
        Nosso app conterá alguns termos quanto ao uso e a política da aplicação{" "}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    gap: 10,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  button: {
    backgroundColor: "#ADFF2F",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#8B4513",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
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
    textAlign: "center",
    marginTop: 30,
    backgroundColor: "white",
  },
  imageContainer:{
    width: '300px',
    height: '250px',
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: '90%',
    height: '90%',
  },
});
