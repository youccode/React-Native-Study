import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainScreen } from "../screens/MainScreen";
import { WriteScreen } from "./WriteScreen";
import { ReadScreen } from "./ReadScreen";

const Stack = createNativeStackNavigator();
export const Container = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name={"Main"} component={MainScreen} />
        <Stack.Screen name={"Write"} component={WriteScreen} />
        <Stack.Screen name={"Read"} component={ReadScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
