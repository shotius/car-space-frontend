// useSwiperRef.js
import { useState, useRef, useEffect } from 'react';

const useSwiperRef = () => {
    const [wrapper, setWrapper] = useState<HTMLButtonElement | null>(null);
    const ref = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        setWrapper(ref.current);
    }, []);

    return [
        wrapper,
        ref
    ]
};

export default useSwiperRef;