import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  useWindowDimensions,
  TouchableHighlight,
  FlatList,
  Alert,
} from "react-native";
import { TodoCard } from "../components/TodoCard";

export const MainScreen = (props) => {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;

  useEffect(() => {
    if (props.route?.params) {
      // 저장 명령
      setTodos((prev) => [...prev, props.route.params]);
    }
  }, [props.route?.params]);

  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    //쓰기 화면으로 이동
    props.navigation.navigate("Write");
  };

  // const { width, height } = useWindowDimensions();

  return (
    <View
      style={{
        alignItems: "center",
        width: width,
        height: height,
      }}
    >
      <TouchableHighlight style={styles.addButtonContainer} onPress={addTodo}>
        <View>
          <Text>+</Text>
        </View>
      </TouchableHighlight>
      <FlatList
        data={todos}
        renderItem={(itemData) => {
          return (
            <TouchableHighlight
              style={{ marginBottom: 5 }}
              onPress={() => {
                props.navigation.navigate("Read", itemData.item);
              }}
            >
              <View style={{ marginBottom: 5 }}>
                <Text>{itemData.item.title}</Text>
              </View>
            </TouchableHighlight>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  addButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: 100,
    backgroundColor: "gray",
    borderRadius: 20,
    marginVertical: 30,
  },
});
