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
import { useSelector } from "react-redux";

export const MainScreen = (props) => {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  const todos = useSelector((state) => state.todo.todo);

  //const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   if (props.route.params?.id) {
  //     const newItem = props.route.params;
  //     setTodos((prev) => {
  //       let exId = prev.findIndex((elem) => elem.id === newItem.id);
  //       if (exId != -1) {
  //         let newState = [...prev];
  //         newState[exId] = newItem;
  //         return newState;
  //       }
  //       return [newItem, ...prev];
  //     });
  //   }
  // }, [props.route.params?.id]);

  const addTodo = () => {
    //쓰기 화면으로 이동
    props.navigation.navigate("Write");
  };

  // const { width, height } = useWindowDimensions();

  return (
    <View
      style={{
        flex: 1,
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
            <View style={{ marginBottom: 20 }}>
              <TodoCard
                title={itemData.item.title}
                onPress={() => {
                  props.navigation.navigate("Read", itemData.item);
                }}
              />
            </View>
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
