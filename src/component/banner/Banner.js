import React, { useCallback, useEffect, useState } from 'react';
import { bannerData } from './banner-data';
import classes from './banner.module.css';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

const Banner = () => {
    const [currentBanner, setCurrentBanner] = useState(0);
    const autoScroll = true;
    const intervalTime = 5000;
    const bannerLength = bannerData.length;

    const prevBanner = () => {
        setCurrentBanner((prev) => (prev === 0 ? bannerLength - 1 : prev - 1));
    };

    const nextBanner = useCallback(() => {
        setCurrentBanner((prev) => (prev === bannerLength - 1 ? 0 : prev + 1));
    }, [bannerLength]);

    useEffect(() => {
        const sideInterval = autoScroll ? setInterval(nextBanner, intervalTime) : null;

        return () => {
            if (sideInterval) clearInterval(sideInterval);
        };
    }, [autoScroll, intervalTime, nextBanner]);

    return (
        <div className={classes.slider}>
            <div>
                {bannerData.map((slide, index) => (
                    <div key={index} className={index === currentBanner ? `${classes.banner} ${classes.current}` : classes.banner}>
                        {index === currentBanner && slide.image && (
                            <img src={slide.image} alt='slide' />
                        )}
                    </div>
                ))}
            </div>
            <div className={classes.slide}>
                <div className={classes.left} onClick={prevBanner}>
                    <HiArrowLeft />
                </div>
                <div className={classes.right} onClick={nextBanner}>
                    <HiArrowRight />
                </div>
            </div>
        </div>
    );
};

export default Banner;
