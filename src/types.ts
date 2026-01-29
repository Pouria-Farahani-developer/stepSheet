
export interface BottomSheetPage {
    keyName: string;
    rendering: React.ReactNode;
}

export interface BottomSheetProps {
    config: BottomSheetPage[];
    isOpen: boolean;
    onClose: () => void;
    initialStep?: number;
}