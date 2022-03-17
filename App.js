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
  Dimensions,
  Platform,
  Modal,
} from "react-native";
import { TodoCard } from "./components/TodoCard";
import { useFonts } from "expo-font";
import { Container } from "./Navigatior/Container";

// export default function App() {
//   // const [loaded] = useFonts({
//   //   customFont1: require("./assets/Dotum.ttf"),
//   // });

//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [text, setText] = useState("");
//   const [todos, setTodos] = useState([]);

//   const handleTextChange = (value) => {
//     setText(value);
//   };

//   const addTodo = () => {
//     console.log("추가!");
//     setTodos((prev) => {
//       return [...prev, { key: text, content: text }];
//     });
//     setText("");
//   };

//   const deleteTodo = (string) => {
//     setTodos((prev) => {
//       return prev.filter((todos) => {
//         return todos.key != string;
//       });
//     });
//   };

//   let blank = " ";

//   // if (!loaded) {
//   //   return null;
//   // }

//   return (
//     <SafeAreaView>
//       <View style={{ padding: 30 }}>
//         {/* {버튼과, 입력창} */}
//         <View>
//           {/* <TextInput
//             placeholder="할 일을 적으세요."
//             value={text}
//             onChangeText={handleTextChange}
//           /> */}
//           <Button title={"추가"} onPress={() => setIsModalVisible(true)} />
//         </View>

//         {/* {데이터를 리스트로 제공} */}
//         {/* <ScrollView showsVerticalScrollIndicater={false}>
//         {todos.map((item, index) => {
//           return (
//             <View>
//               <Text key={index}>{item.content}</Text>
//             </View>
//           );
//         })}
//       </ScrollView> */}
//         <FlatList
//           data={todos}
//           style={{ borderWidth: 1 }}
//           contentContainerStyle={{
//             borderWidth: 1,
//             borderColor: "red",
//             alignItems: "center",
//           }}
//           renderItem={(itemData) => {
//             return (
//               <TodoCard
//                 onPress={() => {
//                   deleteTodo(itemData.item.content);
//                 }}
//                 index={itemData.index}
//                 content={itemData.item.content}
//               />
//             );
//           }}
//         />
//         {isModalVisible ? (
//           <View
//             style={{
//               position: "absolute" /* default 값은 "relative"임
//               position을 통해서 다른 component와 상관없이 고정된 장소에 띄우게 할 수 있음.*/,
//               backgroundColor: "white",
//               height: 600,
//               width: 400,
//               borderRadius: 25,
//               elevation: 1,
//               alignSelf: "center",
//             }}
//           >
//             <TextInput
//               placeholder="할 일을 적으세요."
//               value={text}
//               onChangeText={handleTextChange}
//             />
//             <Button
//               title={"저장"}
//               onPress={() => {
//                 addTodo();
//                 setIsModalVisible(false);
//               }}
//             />
//             <Button title={"close"} onPress={() => setIsModalVisible(false)} />
//           </View>
//         ) : null}
//       </View>
//     </SafeAreaView>
//   );
// }

export const App = () => {
  return <Container />;
};

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
