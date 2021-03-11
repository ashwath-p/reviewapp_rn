import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Review Demo Fuk',
            // headerStyle: {
            // backgroundColor: 'lightblue'
            // }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Aah the review screen',
            // headerStyle: {
            // backgroundColor: 'lightblue'
            // }
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#333',
        headerStyle: { backgroundColor: 'lightblue', height: 100 }
    }
});

export default createAppContainer(HomeStack);