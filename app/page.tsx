'use client'
import { useEffect, useState } from 'react';
import { HomePageInterface, homePage } from '../service/client';
import TechIUseOften from '@/containers/landing/techIUseOften'
import Hero from '@/containers/landing/hero';
import Projects from '@/containers/landing/projects';
import AboutMe from '@/containers/landing/aboutMe';

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
                <div className='grid grid-cols-1 divide-y'>
                    <Hero
                        title1={homeData.title1}
                        title2={homeData.title2}
                        subtitle={homeData.subtitle}
                        heroImage={homeData.heroImage.url}
                    />
                    <TechIUseOften
                        headingText={homeData.sectionTech}
                    />
                    <Projects
                        headingText={homeData.sectionProjects}
                    />
                    <AboutMe
                        headingText={homeData.sectionAboutMe}
                        aboutMe={homeData.sectionAboutMeDescription}
                    />
                </div> :
                <h1>Loading...</h1>
            }
        </>
    );
}