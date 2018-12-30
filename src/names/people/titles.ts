export interface Title {
    male: string,
    female: string
}

const ROYALS: Title[] = [
    {
        male: 'King',
        female: 'Queen',
    },
    {
        male: 'Prince',
        female: 'Princess'
    }
]

const NOBLES: Title[] = [
    {
        male: 'Duke',
        female: 'Duchess'
    },
    {
        male: 'Marquess',
        female: 'Marquisess'
    },
    {
        male: 'Earl',
        female: 'Countess'
    },
    {
        male: 'Viscount',
        female: 'Countess'
    },
    {
        male: 'Lord',
        female: 'Lady'
    },
];


const CHURCH: string[] = [
    'Archbishop',
    'Bishop'
];

export default {
    NOBLES,
    CHURCH,
    ROYALS
}
