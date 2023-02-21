import {atom, atomFamily, selector, selectorFamily} from 'recoil';
import axios, {AxiosResponse} from 'axios';
interface Question {
    id: string,
    name: string,
    score: number
}
interface Section{
    id: string,
    questions: Question[]
}

interface Good{
    id: string,
    category: string,
    name: string,
    poster: string,
    price: number
}
interface BasketGood{
    id: string,
    name: string,
    price: number
}


export const Goods$ = atom<Good[]>({
    key: "Goods",
    default: [
        {
            id: 'js01',
            category: 'books',
            name: 'Дэвид Флэнаган. JavaScript Карманный справочник',
            poster: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
            price: 750,
        },
        {
            id: 'js02',
            category: 'books',
            name: 'Дэвид Флэнаган. JavaScript Подробное руководство',
            poster: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
            price: 1450,
        },
        {
            id: 'js03',
            category: 'books',
            name: 'Алекс Бэнкс и Ева Порселло. React и Redux',
            poster: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
            price: 950,
        },
        {
            id: 'data01',
            category: 'books',
            name: 'Алекс Бэнкс и Ева Порселло. GraphQL',
            poster: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
            price: 850,
        },
        {
            id: 'js04',
            category: 'books',
            name: 'Робин Вирух. Путь к изучению React',
            poster: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80",
            price: 550,
        },
        {
            id: 'video01',
            category: 'video',
            name: 'Фундаментальный JavaScript',
            poster: "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=862&q=80",
            price: 1250,
        },
        {
            id: 'video02',
            category: 'video',
            name: 'Анимации в JavaScript',
            poster: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=746&q=80",
            price: 1550,
        },
        {
            id: 'video03',
            category: 'video',
            name: 'Основы TypeScript',
            poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80",
            price: 2250,
        },
        {
            id: 'video04',
            category: 'video',
            name: 'Pro React',
            poster: "https://images.unsplash.com/photo-1550784343-6bd0ce5d600b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
            price: 1450,
        },
        {
            id: 'sticker01',
            category: 'stickers',
            name: 'Набор наклеек Frontend',
            poster: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80",
            price: 550,
        },
        {
            id: 'sticker02',
            category: 'stickers',
            name: 'Набор наклеек Backend',
            poster: "https://images.unsplash.com/photo-1496493820873-82288ac48a48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
            price: 550,
        },
        {
            id: 'sticker03',
            category: 'stickers',
            name: 'Набор наклеек FullStack',
            poster: "https://images.unsplash.com/photo-1593754500338-969a679d5ca3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            price: 1550,
        }]
})
export const IsOpenBasket$ = atom({
    key: "IsOpenBasket",
    default: false
})

export const Basket$ = atom<BasketGood[]>({
    key: "Basket",
    default: []
})
export const active$ = atom({
    key: "active$",
    default: false
})
export const sections$ = atom<Section[]>({
    key: 'sections',
    default: [
        {
            'id': "1",
            "questions": [
                {
                    id: "1",
                    name: "Rate something",
                    score: 3
                },
                {
                    id: "2",
                    name: "Rate something",
                    score: 4
                },
                {
                    id: "3",
                    name: "Rate something",
                    score: 1
                },
            ]
        },
            {
                'id': "2",
                "questions": [
                    {
                        id: "1",
                        name: "Rate something",
                        score: 3
                    },
                    {
                        id: "5",
                        name: "Rate something",
                        score: 4
                    },
                    {
                        id: "6",
                        name: "Rate something",
                        score: 1
                    },
                ]
            },
            {
                'id': "3",
                "questions": [
                    {
                        id: "7",
                        name: "Rate some thing",
                        score: 3
                    },
                    {
                        id: "8",
                        name: "Rate some thing",
                        score: 4
                    },
                    {
                        id: "9",
                        name: "Rate some thing",
                        score: 1
                    },
                ]
            },
        ]
        // key:"SelectorSection",
        // // get: async (): Promise<Section[]> => {
        // //     // return axios.get('http://localhost:4444').then(function (response) {
        // //     //     const data: Section[] = response.data;
        // //     //     return data;
        // //     // })
        // //     return await (await fetch('http://localhost:4444')).json()
        // // }


});




export const sectionIds$ = selector({
    key: "sectionIds",
    get({get}){
        return get(sections$).map(i => i.id)
    }
})

export const section$ = selectorFamily({
    key: "section",
    get: (id: string)=>({get})=>{
        return get(sections$).find(i => i.id === id)
    }
})

export const questions$ = selector({
    key: "questions",
    get({get}){
        return get(sections$).flatMap(i=> i.questions)
    }
})

export const questionId$ = selectorFamily({
    key: "questionId",
    get: (id: string)=>({get})=>{
        get(questions$).find(i => i.id === id)
    }})

export const question$ = selectorFamily({
    key: "question",
    get: (idAndType: [string, string]) => ({ get }) => {
        const [id, idSection] = idAndType;
        return get(sections$).find((i) => i.id === idSection)?.questions.find(i=>i.id === id);
    }})
interface x {
    id: string,
    idSection: string
}
export const questionScore$ = atomFamily({
    key: "questionScore",
    default: selectorFamily({
        key: 'questionScoreSelector',
        get: (idAndType: [string, string]) => ({ get }) => {
            const [id, idSection] = idAndType;
            const question = get(sections$).find((i) => i.id === idSection)?.questions.find(i=>i.id === id);
            return question ? question.score : 0;
        },
    })
})

export const isButtonActive$ = selectorFamily({
    key: "isButtonActive",
    get: ([id, value, idSection]: [string, number, string])=>
        ({get})=>{
            const score = get(questionScore$([id,idSection]))
            return score === value
        }
})




