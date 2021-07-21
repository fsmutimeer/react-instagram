import React from 'react';
import '../styles/cards.scss';
import Stories from './Stories';
import Card from './Card';

export default function Cards() {

    const commentOne = [
        {
            user: "raffagrassetti",
            text: "Woah due, this is beatiful",
            id:1,
        },
        {
            user: "reallferoz",
            text: "amazing",
            id:2,
        },
        {
            user: "realmadrid",
            text: "niceeeeee!",
            id:3,
        },
        {
            user: "reallrose",
            text: "Love this!",
            id:4,
        }
    ]

    return (
        <div className="cards">
           <Stories/>
           <Card  accountName="real_Doe" storyBorder={true}
           image="https://picsum.photos/800/900"
           comments={commentOne}
           likedByText="Maiere"
           likedByNumber={93}
           hours={5}/>
           <Card  accountName="Jane" storyBorder={true}
           image="https://picsum.photos/800"
           comments={commentOne}
           likedByText="Kriz"
           likedByNumber={34}
           hours={1}/>
           <Card  accountName="John Doe" storyBorder={true}
           image="https://picsum.photos/800/1000"
           comments={commentOne}
           likedByText="Jenifer"
           likedByNumber={45}
           hours={3}/>
        </div>
    )
}
