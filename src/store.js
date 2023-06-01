import { reactive } from 'vue';

export const store = reactive({
	arrTrainer:[
        {
            img:'../../public/trainer1.jpg',
            name: 'Ann Baker',
            profession: 'Personal Trainer'
        },
        {
            img:'../../public/trainer3.jpg',
            name: 'Anne Worren',
            profession: 'Personal Trainer'
        },
        {
            img:'../../public/trainer4.jpg',
            name: 'Peter Rice',
            profession: 'Personal Trainer'
        },
    ],
    ArrPerformance:[
        {
            img:'../../public/blog1.jpg',
            text: 'Train whit your free weights your body weight?',
        },
        {
            img:'../../public/blog4.jpg',
            text: 'To be number one, tryin like you\'re number two',
        },
        {
            img:'../../public/blog6.jpg',
            text: 'Nutritional advice that will keep you training',
        },
        {
            img:'../../public/trainer3.jpg',
            text: 'Top 5 mistakes every gym member makes',
        },
        {
            img:'../../public/trainer4.jpg',
            text: 'Simple principless fro your next workout',
        },
        {
            img:'../../public/trainer1.jpg',
            text: 'The myths of shedding body fat explored',
        },
    ],



});
