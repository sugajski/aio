import React, { useState, useEffect } from "react";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { persistCache } from "apollo-cache-persist";
import { AsyncStorage } from 'react-native';

export const getApolloClient = () => {
  const [client, setClient] = useState(null);

  const cache = new InMemoryCache();

  useEffect(() => {
    persistCache({
      cache,
      storage: AsyncStorage as any,
      trigger: "background",
    }).then(() => {
      const apolloClient = new ApolloClient({
        link: createHttpLink({
          uri: "https://metaphysics-production.artsy.net/",
        }),
        cache: cache,
      });
      setClient(apolloClient as any);
    });
  }, []);

  return { client };
};
