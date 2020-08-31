import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function SignupScreen({ navigation }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (userName, email, password) => {
    console.log(userName, email, password);

    setUserName("");
    setEmail("");
    setPassword("");

    navigation.navigate("App");
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.inputBox}
        onChangeText={(text) => setUserName(text)}
        value={userName}
        placeholder="user name"
      />
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
        onPress={() => handleSignup(userName, email, password)}
      >
        <Text style={{ color: "white" }}>登録</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text
          style={{
            textDecorationLine: "underline",
          }}
        >
          アカウントをお持ちの方はこちら
        </Text>
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
