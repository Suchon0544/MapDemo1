import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Button } from "react-native";
import { Card } from 'react-native-elements'
import style from "./style/style";

function HomeScreen(navigation) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Card title='test01'>
          
      </Card>
      <Button onPress={() => Navigator.navigate("Details")} title = 'Click Me!'> </Button>
    </View>
  );
}

export function HomeScreen();