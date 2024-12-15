import {Redirect} from 'expo-router';
import {Provider} from "react-redux";
import store from "@/context/store";
import {AppRegistry} from "react-native";

export default function Index() {

    return (
        <Provider store={store}>
            <Redirect href="/login"/>
        </Provider>
    );
}
