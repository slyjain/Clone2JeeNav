import React from 'react';
import { chemistry, maths, physics } from "./ChapterNamesAndImages";
import ChapterCard from '../ChapterCards/ChapterCard';

const ChapterList = ({ subject }) => {
    if (subject === "maths") {
        return (
            <div className='flex flex-wrap justify-start'>
                {maths.map((e, index) => (
                    <div className='m-4' key={index}>
                        <ChapterCard 
                            TopicName={e.TopicName} 
                            ImageSrc={e.ImageSrc} 
                            ImageAlt={e.ImageAlt} 
                        />
                    </div>
                ))}
            </div>
        );
    } 
    if (subject === "physics") {
        return (
            <div className='flex flex-wrap justify-start'>
                {physics.map((e, index) => (
                    <div className='m-4' key={index}>
                        <ChapterCard 
                            TopicName={e.TopicName} 
                            ImageSrc={e.ImageSrc} 
                            ImageAlt={e.ImageAlt} 
                        />
                    </div>
                ))}
            </div>
        );
    } 
    if (subject === "chemistry") {
        return (
            <div className='flex flex-wrap justify-start'>
                {chemistry.map((e, index) => (
                    <div className='m-4' key={index}>
                        <ChapterCard 
                            TopicName={e.TopicName} 
                            ImageSrc={e.ImageSrc} 
                            ImageAlt={e.ImageAlt} 
                        />
                    </div>
                ))}
            </div>
        );
    } 
    else {
        return <div>No chapters available for this subject.</div>;
    }
}

export default ChapterList;
