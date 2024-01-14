import React from 'react'

import appLogo from '../images/logoo.jpg'

import appleStoreBadge from '../images/apple_store_badge.svg'
import googlePlayBadge from '../images/google_play_badge.png'

import coverImage from '../images/mock.png'

// endorsement images
import java from '../images/java.png'
import studio from '../images/studio.png'
import gradle from '../images/gradle.png'
import sql from '../images/sql.png'


// section images
import one from '../images/one.png'
import two from '../images/two.png'
import three from '../images/three.png'
import discordImage from '../images/discord.png'

export const initialState = {
    // when in dev, change appURL to local url
    // appURL: 'http://localhost:3000',  
    // when in production, change appURL to real url
    appURL: 'http://localhost:3000',

    appLogo: appLogo,
    appName: 'FitTrack Assistant',

    coverTitle: 'Get in shape with Fitness Time',
    coverText: 'Fitness Time is a fitness app that helps you get in shape and stay in shape. It is a great way to track your progress and stay motivated. You can also connect with other users to share tips and tricks for staying healthy. Join today!',
    appleStoreBadge: appleStoreBadge,
    appleStoreLink: 'https://appetize.io/app/vitjeegx4jkcxd45wy3xvbnaqm?device=pixel4&osVersion=11.0&scale=75',
    googlePlayBadge: googlePlayBadge,
    googlePlayLink: 'https://appetize.io/app/vitjeegx4jkcxd45wy3xvbnaqm?device=pixel4&osVersion=11.0&scale=75',

    coverImage: coverImage,

    endorsementTitle: `Fitness Time is built using various technologies `,
    endorsementText: `In order to build a great product, we need to use the best tools available. We use a variety of technologies to build our products, including Java, Android Studio, SQLlite,Gradle and more.`,
    endorsementList: [
        {
            title: `Java`,
            titleColor: `orangeRed`,
            image: java,
            URL: `https://www.java.com/en/`,
        },
        {
            title: `Android Studio: Mobile App Development`,
            titleColor: `forestGreen`,
            image: studio,
            URL: `https://developer.android.com/studio`,
        },
        {
            title: `Gradle`,
            titleColor: `blue`,
            image: gradle,
            URL: `https://gradle.org/`,
        },
        {
            title: `SQLite`,
            titleColor: `black`,
            image: sql,
            URL: `https://www.sqlite.org/index.html`,
        },
    ],

    sectionList: [
        {
            'title': `Unlock the potential of Tailored Fitness Plans`,
            'text': `Experience customized workout routines designed specifically for your fitness aspirations and individual preferences. Whether you're aiming to shed pounds, enhance muscle tone, or simply maintain overall health, we've got a workout regimen uniquely crafted for you!`,
            'image': one,
        },
        {
            'title': `Schedule your workouts and make fitness a habit`,
            'text': ` Integrate regular workouts seamlessly into your routine, making fitness a habitual part of your lifestyle. Receive timely reminders to help you stay on track and never skip a workout!`,
            'image': two,
        },
        {
            'title': `Visualize your fitness journey with our progress tracker
            `,
            'text': `Envision your fitness path using our progress tracking feature. Monitor your journey, observe your achievements, and identify the next steps towards reaching your goals!`,
            'image': three,
        },
    ],

    discordImage: discordImage,
    discordLink: 'https://discord.com',
}

const initialContext = {
    state: initialState,
    dispatch: () => null,
}

export const Context = React.createContext(initialContext)
