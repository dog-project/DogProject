import uuid from "uuid/v4";
import sanders from '../Headshots/bernie_sanders_headshot.jpg';
import warren from '../Headshots/warren_headshot.jpg';
import biden from '../Headshots/biden_headshot.jpg';
import klobuchar from '../Headshots/klobuchar_headshot.jpg';
import buttigieg from '../Headshots/buttigieg_headshot.jpg';
import bloomberg from '../Headshots/bloomberg_headshot.jpg';

export const Candidates = [
    {
        id: uuid(),
        content: 'Sanders',
        img: sanders
    },
    {
        id: uuid(),
        content: 'Warren',
        img: warren
    },
    {
        id: uuid(),
        content: 'Biden',
        img: biden
    },
    {
        id: uuid(),
        content: 'Buttigieg',
        img: buttigieg
    },
    {
        id: uuid(),
        content: 'Bloomberg',
        img: bloomberg
    },
    {
        id: uuid(),
        content: 'Klobuchar',
        img: klobuchar
    }
];