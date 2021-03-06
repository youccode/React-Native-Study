import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import React from "react";
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
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { TodoReducer } from "./store/reducer/TodoReducer";
import ReduxThunk from "redux-thunk";
import { AuthReducer } from "./store/reducer/AuthReducer";

export default function App() {
  const rootReducer = combineReducers({
    todo: TodoReducer,
    auth: AuthReducer,
  });
  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <Container />
    </Provider>
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
