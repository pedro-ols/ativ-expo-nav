import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { Link } from "expo-router";
import { Button } from "react-native-paper";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.linksContainer}>
        <Link href="/sobre" asChild>
          <Button
            mode="contained"
            onPress={() => console.log("Pressed")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Ir para Sobre</Text>
          </Button>
        </Link>

        <Link href="/login" asChild>
        <Button
            mode="contained"
            onPress={() => console.log("Pressed")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Ir para Login</Text>
          </Button>
        </Link>

        <Link href="/termos" asChild>
        <Button mode="contained" onPress={() => console.log("Pressed")} style={styles.button}>
           <Text style={styles.buttonText}>Ler os nossos termos</Text> 
          </Button>
        </Link>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/4d/09/2f/4d092f3b268785478059f87cded170d1.jpg",
          }}
          style={styles.shrekImage}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    gap: 20,
  },
  linksContainer: {
    flexDirection: "column",
    gap: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#3b5998",
  },
  sectionText: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
  },
  button: {
    backgroundColor: "#ADFF2F",
    width: 200,
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 20,
    borderWidth: "3px",
    borderColor: "#8B4513",
  },
  buttonText: {
    color: "#8B4513",
    fontSize: 12,
    textAlign: "center",
    fontWeight: "bold",
  },
  shrekImage: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: "230px",
    height: "400px",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: "3px",
    borderRadius: "8px",
    borderColor: "#8B4513",
  },
});
