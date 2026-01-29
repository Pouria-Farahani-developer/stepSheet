// types.ts
export interface BottomSheetPage {
    keyName: string;
    rendering: React.ReactNode;
    onNext?: () => void | Promise<void>;
    onBack?: () => void | Promise<void>;
}

export interface BottomSheetProps {
    config: BottomSheetPage[];
}
