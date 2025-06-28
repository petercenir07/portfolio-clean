import Tab from '../ui/tab';
import { useState } from 'react';
import LogoCard from '../logo-card';
import { techStackData, platformsData, toolsData } from '../../data/skills-data';

export default function SkillsSection({ id }) {
    const initialTabs = [
        {
            id: 'tech-stack',
            label: 'Tech Stack',
            isActive: true,
            data: techStackData
        },
        {
            id: 'platforms',
            label: 'Platforms',
            isActive: false,
            data: platformsData
        },
        {
            id: 'tools',
            label: 'Tools',
            isActive: false,
            data: toolsData
        }
    ];
    const [tabs, setTabs] = useState(initialTabs);

    const updateTab = id => {

        setTabs(prevState => {

            const updatedTabs = prevState.map(tab => {
                return { ...tab, isActive: id === tab.id ? true : false }
            });

            return updatedTabs;
        });
    };

    return (
        <section className="py-[70px]" id={id ? id : null}>
            <div className="container">
                <h2 className="text-center text-[#fff] mb-[28px]">Skills</h2>
                <div className="flex justify-center mb-[112px]">

                    <Tab tabs={tabs}  handleUpdate={updateTab}/>
                
                </div>

                    {tabs && 
                        tabs.map(tab => {
                            return (
                                <div className={`${!tab.isActive ? 'hidden' : 'grid'} gap-5 grid-cols-2 lg:grid-cols-4 lg:min-h-[820px]`} key={tab.id}>
                                    {tab.data &&
                                        tab.data.map(item => {
                                            return (
                                                <LogoCard 
                                                    key={item.label} 
                                                    imageUrl={item.imageUrl} 
                                                    label={item.label}
                                                    className="mx-auto w-full"/>
                                            );
                                        })
                                    }
                                </div>
                            );
                        })
                    }
            </div>
        </section>
    );
}
