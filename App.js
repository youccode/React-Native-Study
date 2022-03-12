import { StatusBar } from "expo-status-bar";
import react, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image, Button, TextInput, ScrollView } from "react-native-web";

export default function App() {
  const [text, setText] = useState();

  return (
    <View style={styles.container}>
      <Button
        title={"Push"}
        onPress={() => {
          console.log("You pushed the Button!");
        }}
        color={"red"}
      ></Button>

      <Image source={"./favicon.png"} style={styles.default}></Image>
      <TextInput onChangeText={setText} value={text} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  default: {
    backgroundColor: "red",
  },
});
