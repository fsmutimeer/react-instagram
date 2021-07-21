import React from 'react'
import '../styles/suggestions.scss';

import Profile from './Profile';


export default function Suggestions() {
    return (
        <div className="titleContainer">
            <div className="title">Suggestion For You</div>   
            <a href='/'>See All</a>         
        <Profile caption="Followed by mapvault + 3 more" urlText="Follow" iconSize="medium" captionSize="small" storyBorder={true}/>
        <Profile caption="Followed by fsmutimeer + 2 more" urlText="Follow" iconSize="medium" captionSize="small" storyBorder={true}/>
        <Profile caption="Followed by john + 1 more" urlText="Follow" iconSize="medium" captionSize="small" />
        <Profile caption="Followed by doe + 5 more" urlText="Follow" iconSize="medium" captionSize="small" />
        <Profile caption="Followed by mapvault + 9 more" urlText="Follow" iconSize="medium" captionSize="small" storyBorder={true}/>
        </div>
    )
}
