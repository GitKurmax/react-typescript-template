import React, {createContext, CSSProperties, useContext, useState} from 'react';

type AvailableThemes = 'light' | 'dark'

const themes: Record<AvailableThemes, CSSProperties> = {
    light: {
        color: "#000000",
        background: "#eeeeee"
    },
    dark: {
        color: "#ffffff",
        background: "#222222"
    }
}

const ThemeContext = createContext({
    themes,
    toggle: (setTheme: React.Dispatch<AvailableThemes>, theme: AvailableThemes) => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
})

const Context = () => {
    const {themes, toggle} = useContext(ThemeContext)
    const [currentTheme, setCurrentTheme] = useState<AvailableThemes>('light')

    return (
        <button style={{background: themes[currentTheme].background, color: themes[currentTheme].color}}
                onClick={() => toggle(setCurrentTheme, currentTheme)}
        >
            Button
        </button>
    );
};

export default Context;