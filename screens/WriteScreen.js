import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/action/TodoActions";

export const WriteScreen = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => {
        return (
          <Button
            title="작성취소"
            onPress={() => {
              props.navigation.navigate("Main");
            }}
          />
        );
      },
      headerRight: () => {
        return (
          <Button
            title="저장"
            onPress={() => {
              //Global state에다가 todo 추가.
              const currentDate = new Date();

              dispatch(addTodo(title, content));
              props.navigation.navigate("Main");
            }}
          />
        );
      },
    });
  }, [title, content]);

  return (
    <View style={styles.main}>
      {/* 1.뒤로가기, 저장 버튼 */}
      {/* 2. 제목, 내용을 쓸 수 있는 공간 */}
      <View
        style={{
          width: "90%",
          borderBottomColor: "black",
          borderBottomWidth: 1,
        }}
      >
        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder={"제목"}
          maxLength={25}
        />
      </View>
      <ScrollView style={{ borderWidth: 1, width: "90%" }}>
        <View>
          <TextInput
            value={content}
            onChangeText={setContent}
            placeholder={"할 일을 적어주세요"}
            multiline={true}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
  },
});
