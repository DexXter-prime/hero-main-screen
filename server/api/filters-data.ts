export default defineEventHandler(async () => {
    return {
        filters: [
            {
                id: Math.floor(Math.random() * 10000),
                subtitle: 'Дом',
                defaultValue: {
                    value: 'any',
                    label: 'Любая',
                },
                options: [
                    {
                        value: 'first',
                        label: 'Первый Дом',
                    },
                    {
                        value: 'second',
                        label: 'Второй Дом',
                    },
                    {
                        value: 'third',
                        label: 'Третий Дом',
                    },
                ]
            },
            {
                id: Math.floor(Math.random() * 10000),
                subtitle: 'Комнатность',
                defaultValue: {
                    value: 'any',
                    label: 'Любая',
                },
                options: [
                    {
                        value: 'one',
                        label: '1 Комната',
                    },
                    {
                        value: 'two',
                        label: '2 Комнаты',
                    },
                    {
                        value: 'three',
                        label: '3 Комнаты',
                    },
                ]
            },
            {
                id: Math.floor(Math.random() * 10000),
                subtitle: 'Площадь',
                defaultValue: {
                    value: 'any',
                    label: 'Любая',
                },
                options: [
                    {
                        value: 'big',
                        label: 'Большая',
                    },
                    {
                        value: 'medium',
                        label: 'Средняя',
                    },
                    {
                        value: 'small',
                        label: 'Малая',
                    },
                ]
            }
        ],
    }
});