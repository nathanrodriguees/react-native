import * as S from './src/class/StyleComponentsExternal';
import { Platform, StyleSheet } from 'react-native';

export default function App() {
  return (
    <S.PageContainer style={teste.container}>
        <S.PageTitle>Hellou World</S.PageTitle>
        <S.PageSubTitle>Test</S.PageSubTitle>
    </S.PageContainer>
  );
}

const teste = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: Platform.OS === 'IOS' ? '#fff' : '#000'
  }
}

)