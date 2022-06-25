import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
`;

export const Home = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #f9f6ee;
`;

export const CustomText = styled.Text`
  color: black;
  font-size: 50px;
`;

export const HomeText = styled.Text`
  color: black;
  font-size: 30px;
`;