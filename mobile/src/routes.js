import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "./pages/Main";
import Profile from "./pages/Profile";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: Main,
        navagationOptions: {
          title: "DevRadar"
        }
      },
      Profile: {
        screen: Profile,
        navagationOptions: {
          title: "Perfil GitHub"
        }
      }
    },
    {
      defaultNavigationOptions: {
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#f00"
        }
      }
    }
  )
);

export default Routes;
