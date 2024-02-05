'use client'
import { useEffect, useState } from 'react';
import { HomePageInterface, homePage, ProjectInterface, projects } from '../service/client';
import TechIUseOften from '@/containers/landing/techIUseOften'
import Hero from '@/containers/landing/hero';
import Projects from '@/containers/landing/projects';
import AboutMe from '@/containers/landing/aboutMe';
import LoadingPage from '@/components/loading';

export default function Home() {
    const [homeData, setHomeData] = useState<HomePageInterface>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [projectsData, setProjectsData] = useState<ProjectInterface[]>();
    const [loadingProjects, setProjectsLoading] = useState(false);
    const [errorProjects, setProjectsError] = useState(false);

    useEffect(() => {
        getHomePageData();
    }, []);

    useEffect(() => {
        getProjectData();
    }, []);

    const getHomePageData = async () => {
        const res: HomePageInterface = await homePage();
        if(res){
            setTimeout(() => {
                setError(false);
                setHomeData(res);
                setLoading(false);
            }, 3000);
        } else {
            setLoading(false);
            setError(true);
        }
        return;
    }

    const getProjectData = async () => {
        setProjectsLoading(true);
        if(error) setProjectsError(false);
        const res: ProjectInterface[] = await projects();
        if(res){
            setLoading(false);
            setProjectsData(res);
        } else {
            setLoading(false);
            setError(true);
        }
        return;
    }

    if(loading) {
        return (
            <LoadingPage />
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
                        projectList={projectsData}
                    />
                    <AboutMe
                        headingText={homeData.sectionAboutMe}
                        aboutMe={homeData.sectionAboutMeDescription}
                        image={homeData.sectionAboutMeImage.url}
                    />
                </div> :
                <LoadingPage />
            }
        </>
    );
}