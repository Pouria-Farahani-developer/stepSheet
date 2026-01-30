import {useUrlNavigation} from "../../hooks/use-url-navigation.tsx";
// import {useLocalStorageNavigation} from "./use-local-storage-navigation.tsx";

import { config } from "../../utils/util.tsx";

import BottomSheet from '../bottom-sheet/BottomSheet.tsx';
import './App.css';

const App = () => {

    const navigation = useUrlNavigation()

    // const navigation = useLocalStorageNavigation()

    return (
        <div className="mobile-container">
            <div className="mobile-content">
                <button
                    onClick={() => navigation.setCustomStep(1)}
                    className="open-button"
                >
                    Open Bottom Sheet
                </button>

                <BottomSheet
                    config={config}
                    navigation={navigation}
                />
            </div>
        </div>
    );
};

export default App;
