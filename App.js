import { StatusBar } from "expo-status-bar";
import react, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Image,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native-web";
import { TodoCard } from "./components/TodoCard";
import { useFonts } from "expo-font";

export default function App() {
  // const [loaded] = useFonts({
  //   customFont1: require("./assets/Dotum.ttf"),
  // });

  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleTextChange = (value) => {
    setText(value);
  };

  const addTodo = () => {
    console.log("추가!");
    setTodos((prev, index) => {
      return [...prev, { key: index, content: text }];
    });
    setText("");
  };

  const deleteTodo = (string) => {
    setTodos((prev) => {
      return prev.filter((todos) => {
        return todos.key != string;
      });
    });
  };

  let blank = " ";

  // if (!loaded) {
  //   return null;
  // }

  return (
    <SafeAreaView>
      <View style={{ padding: 30 }}>
        {/* {버튼과, 입력창} */}
        <View>
          <TextInput
            placeholder="할 일을 적으세요."
            value={text}
            onChangeText={handleTextChange}
          />
          <Button title={"추가"} onPress={addTodo} />
        </View>

        {/* {데이터를 리스트로 제공} */}
        {/* <ScrollView showsVerticalScrollIndicater={false}>
        {todos.map((item, index) => {
          return (
            <View>
              <Text key={index}>{item.content}</Text>
            </View>
          );
        })}
      </ScrollView> */}
        <FlatList
          data={todos}
          style={{ borderWidth: 1 }}
          contentContainerStyle={{
            borderWidth: 1,
            borderColor: "red",
            alignItems: "center",
          }}
          renderItem={(itemData) => {
            return (
              <TodoCard
                onPress={deleteTodo}
                index={itemData.index}
                content={itemData.item.content}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
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
