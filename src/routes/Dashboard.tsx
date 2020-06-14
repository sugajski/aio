import React, { useEffect } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router-native";
import { useSelector, useDispatch } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import get from "lodash/get";

import { POSTS_QUERY } from "../graphql/queries";
import { addArts } from "../redux/actions";
import { Colors } from "../themes";
import { ListImage } from "../components";
import DashboardStyles from "./styles/DashboardStyles";

const Dashboard = () => {
  const { arts } = useSelector((state: any) => state.arts);
  const { data } = useQuery(POSTS_QUERY, {
    fetchPolicy: "cache-first",
  });
  const dispatch = useDispatch();
  const routerHistory = useHistory();

  useEffect(() => {
    if (data.articles) {
      dispatch(addArts(data.articles));
    }
  }, []);

  const showDetails = (item: IArt, index: number) => {
    const state = {
      description: item.title,
      author: item.author.name,
      image: item.thumbnail_image.image_url,
      index,
    };
    routerHistory.push("/postDetails", state);
  };

  return (
    <SafeAreaView style={DashboardStyles.container}>
      {!arts ? (
        <View style={DashboardStyles.loadingContainer}>
          <ActivityIndicator size="large" color={Colors.white} />
        </View>
      ) : (
        <FlatList
          data={arts}
          renderItem={({ item, index }: { item: IArt; index: number }) => {
            const imageUri = get(item, "thumbnail_image.image_url", null);
            if (!imageUri) {
              return null;
            }
            return (
              <ListImage
                uri={imageUri}
                onPress={() => showDetails(item, index)}
              />
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
        />
      )}
    </SafeAreaView>
  );
};

export default Dashboard;
