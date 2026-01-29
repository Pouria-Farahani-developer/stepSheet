export const config = [
    {
        keyName: '1',
        rendering: (
            <div>
                <h2>First Step</h2>
                <p>Content of First Step</p>
            </div>
        ),
        onNext:() => console.log('page1'),
        onBack: () => console.log('page1')
    },
    {
        keyName: '2',
        rendering: (
            <div>
                <h2>Second Step</h2>
                <p>Content of Second Step</p>
            </div>
        ),
        onNext:() => console.log('page2'),
        onBack: () => console.log('page2')
    },
    {
        keyName: '3',
        rendering: (
            <div>
                <h2>Third Step</h2>
                <p>Content Of Third Step</p>
            </div>
        ),
        onNext:() => console.log('page3'),
        onBack: () => console.log('page3')
    },
    {
        keyName: '4',
        rendering: (
            <div>
                <h2>Fourth Step</h2>
                <p>Content Of Fourth Step</p>
            </div>
        ),
        onNext:() => console.log('page4'),
        onBack: () => console.log('page4')
    }
];