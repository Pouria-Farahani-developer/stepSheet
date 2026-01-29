import  { useState } from 'react';
import BottomSheet from './BottomSheet';
import {config} from "./util.tsx";

const App = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(true)}>
                open Bottom sheet
            </button>

            <BottomSheet
                config={config}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </div>
    );
};

export default App;
