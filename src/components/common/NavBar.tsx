import React, { useEffect, FC } from "react";
import { View, Image, TouchableOpacity, BackHandler, Text } from "react-native";
import { useHistory } from "react-router-native";

import { Images } from "../../themes";
import NavBarStyles from "./styles/NavBarStyles";

interface INavBarProps {
  title?: string;
}

const NavBar: FC<INavBarProps> = ({ title = null }) => {
  const router = useHistory();

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackPressed);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackPressed);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBackPressed = () => {
    router.goBack();
    return true;
  };

  return (
    <View style={NavBarStyles.container}>
      {title && <Text style={NavBarStyles.title}>{title}</Text>}
      <TouchableOpacity onPress={handleBackPressed}>
        <View style={NavBarStyles.backButtonContainer}>
          <Image
            source={Images.back}
            style={NavBarStyles.backButtonIcon}
            resizeMode="stretch"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;
