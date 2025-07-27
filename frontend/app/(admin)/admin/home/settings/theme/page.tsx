"use client"

import { useTheme } from 'next-themes'
import { useState } from 'react'

export default function Theme() {
    const theme = useTheme()

    const [switchTheme, setSwitchTheme] = useState(theme.theme === "system")
    console.log(theme.resolvedTheme);
    

    return (
        <section>
            <div className="container mx-auto px-4">
                <article>
                    <h3>Theme</h3>
                </article>
                <div>
                    <button onClick={() => setSwitchTheme(switchTheme)}>System</button>
                    <button onClick={() => setSwitchTheme(!switchTheme)}>Light</button>
                    <button onClick={() => setSwitchTheme(switchTheme)}>Dark</button>
                </div>
            </div>
        </section>
    )
}
