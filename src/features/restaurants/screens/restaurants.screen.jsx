/* eslint-disable prettier/prettier */
import { Searchbar } from "react-native-paper";
import { StatusBar, SafeAreaView, View } from "react-native";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

const SearchBarContainer = styled.View`
  padding: 16px;
`;

const SearchBar = styled(Searchbar)``;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: 16px;
`;

const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchBarContainer>
        <SearchBar placeholder="Search" />
      </SearchBarContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};
export default RestaurantsScreen;
