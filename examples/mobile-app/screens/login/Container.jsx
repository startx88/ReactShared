import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const Container = (props) => {
  console.log(props);
  return (
    <ScrollView>
      <View>
        <Text>Login</Text>
      </View>
    </ScrollView>
  );
};

export default Container;
