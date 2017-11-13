import Login from "./app/ios/login";

import React, { Component } from "react";
import { AppRegistry, NavigatorIOS } from "react-native";

export default class foodhunt extends Component {
  render() {
    return (
      <NavigatorIOS
        navigationBarHidden={true}
        initialRoute={{ title: "Login", component: Login }}
        style={{ flex: 1 }}
      />
    );
  }
}

AppRegistry.registerComponent("foodhunt", () => foodhunt);
