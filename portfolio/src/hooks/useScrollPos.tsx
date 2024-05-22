import { useEffect, useState } from "react"

const UseScrollFade = () => {
    const [IsAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY <= 200);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return IsAtTop;
};

export default UseScrollFade;