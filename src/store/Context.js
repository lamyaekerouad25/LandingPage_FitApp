import React from 'react'

import appLogo from '../images/logo.png'

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
    appName: 'Fitness Time',

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
            'title': `Discover the power of Personalized Workouts`,
            'text': `Get personalized workouts based on your fitness goals and preferences. Whether you want to lose weight, build muscle, or just stay healthy, we have a workout for you!`,
            'image': one,
        },
        {
            'title': `Schedule your workouts and make fitness a habit`,
            'text': ` Schedule your workouts and make fitness a habit. We'll send you reminders so you never miss a workout!`,
            'image': two,
        },
        {
            'title': `Visualise your fitness journey with our progress tracker`,
            'text': `Track your progress with our progress tracker. See how far you've come and what you need to do next to reach your goals!`,
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
