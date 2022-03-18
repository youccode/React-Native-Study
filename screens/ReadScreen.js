import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native";

export const ReadScreen = (props) => {
  const param = props.route.params;
  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => {
        return <Button title="수정하기" onPress={console.log("hi")} />;
      },
    });
  });
  const edit = () => {
    props.navigation.navigate("Write", param);
  };

  return (
    <View>
      <Text>{"읽기화면"}</Text>
      <Text>제목: {param.title}</Text>
      <Text>내용:{param.content}</Text>
    </View>
  );
};
