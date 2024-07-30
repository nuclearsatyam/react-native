// import { StatusBar } from "expo-status-bar";
// import { Text, View } from "react-native";
// import { Link } from "expo-router";

// export default function App() {
//   return (
//     <View className="flex-1 items-center justify-center  bg-green">
//       <Text className="text-3xl"> Hunk </Text>
//       <StatusBar style="auto" />
//       <Link href="/profile" style={{ color: "blue" }}>
//         Go to Profile
//       </Link>
//     </View>
//   );
// }
import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Text ClassName="text-3xl">Hunk</Text>
      <StatusBar style="auto" />
      <Link href="/home" style={styles.link}>
        Go to Home
      </Link>
    </View>
  );
}

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
