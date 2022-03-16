import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export const TodoCard = (props) => {
  /*prop-> todo에 들어갈 내용과, 인덱스를 받으면 
    그거를 예쁘게 나타내는 카드
    터치가 가능한 component => onPress 함수를 실행해야 함.
    -> prop으로 받아와야 함.*/

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.card}>
        <View>
          <Text>{props.index}</Text>
        </View>
        <View>
          <Text>{props.content}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 50,
    width: 300,
    elevation: 1,
    shadowColor: "black",
    shadowRadius: 1,
    borderRadius: 10,
    marginBottom: 5,
    marginTop: 5,
    alignItems: "center",
    flex: 1,
  },
});
