// import reactLogo from '@/assets/react.svg';
import AboutComponent from '@/components/about/About.component.tsx';

import { HeaderComponent } from './components/header/Header.component.tsx';

import './App.css';

function App() {
    return (
        <>
            <HeaderComponent />
            <main className="home">
                <AboutComponent />
            </main>
        </>
    );
}

export default App;
