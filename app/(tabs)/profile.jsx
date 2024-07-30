import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Link href="/index" style={styles.link}>
        Go Home
      </Link>
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  link: {
    color: "blue",
    fontSize: 18,
  },
});
