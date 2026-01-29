import BottomSheet from './BottomSheet';
import { config } from "./util.tsx";
import './index.css';

const App = () => {

    return (
        <div className="mobile-container">
            <div className="mobile-content">
                <a
                    href={'/?step=1'}
                    className="open-button"
                >
                    Open Bottom Sheet
                </a>

                <BottomSheet
                    config={config}
                />
            </div>
        </div>
    );
};

export default App;
