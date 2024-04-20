import AboutComponent from '@/components/about/About.component.tsx';

import { HeaderComponent } from './components/header/Header.component.tsx';

import styles from './app.module.css';

function App() {
    return (
        <body className={styles.body}>
            <HeaderComponent />
            <main className="home">
                <AboutComponent />
            </main>
        </body>
    );
}

export default App;
