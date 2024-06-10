import React from 'react';
import { motion } from 'framer-motion';
import Cartshop from '../components/Cartshop/Cartshop';
import Popular from '../components/Popular/Popular';
import Offers from '../components/Offers/Offers';
import NewCollections from '../components/NewCollections/NewCollections';
import NewsLetter from '../components/NewsLetter/NewsLetter';
import useAnimationOnScroll from '../components/hooks/useAnimationOnScroll';

const Shop = () => {
    const createObserverComponent = (Component) => {

        const [controls, ref] = useAnimationOnScroll();

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