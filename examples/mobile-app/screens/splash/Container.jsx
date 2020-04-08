import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Button,
} from "react-native";

import { DemoComponent } from "ReactShared";

const Container = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/images/splash-screen.png")}
        />
        <Text>The Social Network</Text>
        <Text>Connect with us</Text>
        <DemoComponent>
          <Text>Hello SharedReact</Text>
        </DemoComponent>
        <View
          style={{
            marginVertical: 20,
            flexDirection: "row",
            width: "50%",
            justifyContent: "space-between",
          }}
        >
          <Button onPress={() => navigation.navigate("Login")} title="Login" />
          <Button
            onPress={() => navigation.navigate("Register")}
            title="Register"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  image: {
    marginVertical: 20,
  },
  container: {
    padding: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {},
});

export default Container;
