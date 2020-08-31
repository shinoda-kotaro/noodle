import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (email, password) => {
    console.log(email, password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.inputBox}
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="email"
      />
      <TextInput
        style={styles.inputBox}
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
        placeholder="password"
      />
      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => handleLogin(email, password)}
      >
        <Text style={{ color: "white" }}>ログイン</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B3424A",
    alignItems: "center",
    justifyContent: "center",
  },
  inputBox: {
    height: 40,
    width: "80%",
    backgroundColor: "white",
    textAlign: "center",
    borderRadius: 5,
    marginBottom: 5,
  },
  signupButton: {
    height: 40,
    width: "80%",
    backgroundColor: "#57C3AD",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
});
