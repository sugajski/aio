import React from "react";
import renderer from "react-test-renderer";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { NavBar } from "../src/components/common";

test("NavBar renders correctly", () => {
  const tree = renderer
    .create(
      <SafeAreaProvider
        initialSafeAreaInsets={{ top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <NavBar />
      </SafeAreaProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
