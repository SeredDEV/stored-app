import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Cartshop from '../components/Cartshop/Cartshop';
import Popular from '../components/Popular/Popular';
import Offers from '../components/Offers/Offers';
import NewCollections from '../components/NewCollections/NewCollections';
import NewsLetter from '../components/NewsLetter/NewsLetter';

const Shop = () => {
    const createObserverComponent = (Component) => {
        const controls = useAnimation();
        const ref = useRef();

        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        controls.start("visible");
                    } else {
                        controls.start("hidden");
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

        return (
            <motion.div
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0.5 }
                }}
                transition={{ duration: 0.3 }}
            >
                <Component />
            </motion.div>
        );
    };

    return (
        <div>
            {createObserverComponent(Cartshop)}
            {createObserverComponent(Popular)}
            {createObserverComponent(Offers)}
            {createObserverComponent(NewCollections)}
            {createObserverComponent(NewsLetter)}
        </div>
    );
};

export default Shop;