export const config = [
    {
        keyName: 'page1',
        rendering: (
            <div>
                <h2>صفحه اول</h2>
                <p>محتوای صفحه اول اینجا قرار می‌گیرد</p>
            </div>
        ),
        onNext:() => console.log('page1'),
        onBack: () => console.log('page1')
    },
    {
        keyName: 'page2',
        rendering: (
            <div>
                <h2>صفحه دوم</h2>
                <p>محتوای صفحه دوم اینجا قرار می گیرد</p>
            </div>
        ),
        onNext:() => console.log('page2'),
        onBack: () => console.log('page2')
    },
    {
        keyName: 'page3',
        rendering: (
            <div>
                <h2>صفحه سوم</h2>
                <p>محتوای صفحه سوم اینجا قرار می گیرد</p>
            </div>
        ),
        onNext:() => console.log('page3'),
        onBack: () => console.log('page3')
    },
    {
        keyName: 'page4',
        rendering: (
            <div>
                <h2>صفحه چهارم</h2>
                <p>محتوای صفحه چهارم اینجا قرار می گیرد</p>
            </div>
        ),
        onNext:() => console.log('page4'),
        onBack: () => console.log('page4')
    }
];