import React, { useEffect } from "react";
import { View } from "react-native";
import { useQuery } from "@apollo/react-hooks";
import { useSelector, useDispatch } from "react-redux";

import { POSTS_QUERY } from "../graphql/queries";
import { addArts } from "../redux/actions";

const Dashboard = () => {
  const { arts } = useSelector((state: any) => state.arts);
  const { data } = useQuery(POSTS_QUERY, {
    fetchPolicy: "cache-first",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.articles) {
      dispatch(addArts(data.articles));
    }
  }, []);

  return <View style={{width: '100%', height: '100%', backgroundColor: 'red'}} />;
};

export default Dashboard;
