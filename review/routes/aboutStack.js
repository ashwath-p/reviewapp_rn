import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';

const screens = {
    About: {
        screen: About,
        navigationOptions: {
            title: 'Review Demo Fuk',
            // headerStyle: {
            // backgroundColor: 'lightblue'
            // }
        }
    }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#333',
        headerStyle: { backgroundColor: 'lightblue', height: 100 }
    }
});

export default AboutStack;