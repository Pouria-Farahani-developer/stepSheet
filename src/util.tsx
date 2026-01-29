export const config = [
    {
        keyName: 'page1',
        rendering: (
            <div>
                <h2>صفحه اول</h2>
                <p>محتوای صفحه اول اینجا قرار می‌گیرد</p>
            </div>
        )
    },
    {
        keyName: 'page2',
        rendering: (
            <div>
                <h2>صفحه دوم</h2>
                <form>
                    <input type="text" placeholder="نام" />
                    <input type="email" placeholder="ایمیل" />
                </form>
            </div>
        )
    },
    {
        keyName: 'page3',
        rendering: (
            <div>
                <h2>صفحه سوم</h2>
                <p>تایید نهایی</p>
            </div>
        )
    },
    {
        keyName: 'page4',
        rendering: (
            <div>
                <h2>صفحه چهارم</h2>
                <p>تایید نهایی</p>
            </div>
        )
    }
];