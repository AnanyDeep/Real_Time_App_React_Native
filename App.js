import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [ctime, setCtime] = useState();

  const Timer = () => {
    const time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(Timer, 1000);
  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{ctime}</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  timerText: {
    fontSize: 100,
    color: "#FFF",
    fontWeight: "900",
    // fontStyle: "italic",
  },
});
