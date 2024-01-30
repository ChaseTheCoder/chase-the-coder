'use client'
import { useEffect, useState } from 'react';
import { HomePageInterface, homePage } from '../service/client';
import Hero from '@/containers/landing/hero';

export default function Home() {
    const [homeData, setHomeData] = useState<HomePageInterface>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        getHomePageData();
    }, []);

    const getHomePageData = async () => {
        setLoading(true);
        if(error) setError(false);
        const res: HomePageInterface = await homePage();
        if(res){
            setLoading(false);
            setHomeData(res);
        } else {
            setLoading(false);
            setError(true);
        }
        return;
    }

    if(loading) {
        return (
            <h1>Loading...</h1>
        )
    }

    if(error) {
        return (
            <h1>Error...please try again.</h1>
        )
    }
    
    return (
        <>
            {homeData ? 
                <>
                    <Hero
                        title1={homeData.title1}
                        title2={homeData.title2}
                        subtitle={homeData.subtitle}
                        heroImage={homeData.heroImage.url}
                    />
                    <h2>{homeData.sectionTech}</h2>
                    <h2>{homeData.sectionTech}</h2>
                    <h2>{homeData.sectionProjects}</h2>
                    <h2>{homeData.sectionAboutMe}</h2>
                    <h2>{homeData.sectionAboutMeDescription}</h2>
                </> :
                <h1>Loading...</h1>
            }
        </>
    );
}