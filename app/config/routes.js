import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Home from '../screens/Home';
import PersonalInfo from '../screens/PersonalInfo';
import BackgroundInfo from '../screens/BackgroundInfo';
import Dashboard from '../screens/Dashboard';
import Symptoms from "../screens/Symptoms";
import Investigations from "../screens/Investigations";
import Comorbidities from "../screens/Comorbidities";
import Test from "../screens/Test";

const HomeStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: () => null,
        },
    },
    PersonalInfo: {
        screen: PersonalInfo,
        navigationOptions: {
            headerTitle: 'New Patient',
        }
    },
    BackgroundInfo: {
        screen: BackgroundInfo,
        navigationOptions: {
            headerTitle: 'New Patient',
        }
    },
    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            headerTitle: 'Patient Home',
        }
    },
    Symptoms: {
        screen: Symptoms,
        navigationOptions: {
            headerTitle: 'Symptoms',
        }
    },
    Comorbidities: {
        screen: Comorbidities,
        navigationOptions: {
            headerTitle: 'Comorbidities',
        }
    },
    Investigations: {
        screen: Investigations,
        navigationOptions: {
            headerTitle: 'Investigations',
            headerTitleStyle: {
                alignSelf: 'center',
            }
        }
    },
    Test: {
        screen: Test,
        navigationOptions: {
            headerTitle: 'Testing',
        },
    }
}, {
    headerMode: 'screen',
});

const MainRoute = createStackNavigator({
    Home: HomeStack,
}, {
    mode: 'screen',
    headerMode: 'none',
});

export default createAppContainer(MainRoute);