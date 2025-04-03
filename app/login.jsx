import { View, Text, StyleSheet, Pressable, TextInput, ImageBackground } from "react-native";
import { Link } from "expo-router";

export default function Login() {
  return (

      
      <View style={styles.container}>
        
        <View style={styles.linkContainer}>

      <Link href="/" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Ir para Tela Inicial</Text>
        </Pressable>
      </Link>
        </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true}/>
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>
    
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 400,
    padding: 20,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#8B4513",
  },
  linkContainer: {
    height: 100,
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#ADFF2F",
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
    color: "#8B4513",
  },
  sectionText: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
  },
  button: {
    backgroundColor: "#8B4513",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  inputContainer: {
    alignItems: "center",
    backgroundColor: "#ADFF2F",
    justifyContent: "center",
    height: 220,
    width: 300,
    borderRadius: 8,
  },
  input: {
    backgroundColor: "#ADFF2F",
    width: 200,
    height: 50,
    margin: 8,
    padding: 12,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: "#8B4513",
  },
  
  image: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 400,
},
});
