import React, { FC } from "react";
import { Text } from "react-native";

import DescriptionSectionStyles from "./styles/DescriptionSectionStyles";

interface IDescriptionSectionProps {
  author: string;
  description: string;
}

const DescriptionSection: FC<IDescriptionSectionProps> = ({
  author,
  description,
}) => (
  <Text>
    <Text style={DescriptionSectionStyles.author}>{author} </Text>
    <Text style={DescriptionSectionStyles.description}>{description}</Text>
  </Text>
);

export default DescriptionSection;
