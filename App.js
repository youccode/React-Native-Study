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
} from "react-native-web";

export default function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleTextChange = (value) => {
    setText(value);
  };

  const addTodo = () => {
    console.log("추가!");
    setTodos((prev) => {
      return [...prev, { key: text, content: text }];
    });
    console.log(todos);
  };

  const deleteTodo = (string) => {
    setTodos((prev) => {
      return prev.filter((todos) => {
        return todos.key != string;
      });
    });
  };

  let blank = " ";

  return (
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
        renderItem={(itemData) => {
          return (
            <TouchableOpacity onPress={deleteTodo}>
              <View>
                <Text>
                  {itemData.index}.{blank}
                  {itemData.item.content}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
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
