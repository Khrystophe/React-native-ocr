import {StyleSheet, View} from 'react-native';
import {Route, Routes} from 'react-router-native';
import RecognizePage from './Recognize_page';
import SigninPage from './Signin_page';
import MyHomePage from './Home_page';
import ResultPage from './ResultPage';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    // backgroundColor: theme.colors.mainBackground,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <Routes>
        <Route path="/" element={<SigninPage />} exact />
        <Route path="/RecognizePage" element={<RecognizePage />} />
        <Route path="/MyHomePage" element={<MyHomePage />} />
        <Route path="/ResultPage" element={<ResultPage />} />
      </Routes>
    </View>
  );
};

export default Main;
