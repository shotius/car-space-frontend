import { useState, useEffect } from "react";

function useWindowSize() {
    const isWindowClient = typeof window === "object";

    const [windowSize, setWindowSize] = useState(
        isWindowClient
            ? { width: window.innerWidth, height: window.innerHeight }
            : undefined
    );

    useEffect(() => {
        //a handler which will be called on change of the screen resize
        function setSize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        if (isWindowClient) {
            window.addEventListener("resize", setSize);
            return () => window.removeEventListener("resize", setSize);
        }
    }, [isWindowClient, setWindowSize,windowSize]);

    return windowSize;
}

export default useWindowSize;