import { useEffect, useRef } from 'react';
import { useAnimation } from 'framer-motion';

const useAnimationOnScroll = () => {
    const controls = useAnimation();
    const ref = useRef();
    let observer;

    useEffect(() => {
        observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start("visible").then(() => {
                        observer.unobserve(entry.target);
                    });
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1,
            }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [controls]);

    return [controls, ref];
}

export default useAnimationOnScroll;