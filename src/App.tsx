import BottomSheet from './BottomSheet';
import { config } from "./util.tsx";
import './index.css';
import {useNavigation} from "./useNavigation.tsx";

const App = () => {

    const navigation = useNavigation()


    return (
        <div className="mobile-container">
            <div className="mobile-content">
                <button
                    onClick={() => navigation.setCustomStep(2)}
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
