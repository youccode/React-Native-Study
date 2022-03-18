import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainScreen } from "../screens/MainScreen";
import { WriteScreen } from "../screens/WriteScreen";
import { ReadScreen } from "../screens/ReadScreen";
import { Button } from "react-native";

const Stack = createNativeStackNavigator();
export const Container = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name={"Main"} component={MainScreen} />
        <Stack.Screen
          name={"Write"}
          component={WriteScreen}
          options={(props) => {
            return { headerTitleAlign: "center" };
          }}
        />

        <Stack.Screen name={"Read"} component={ReadScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
