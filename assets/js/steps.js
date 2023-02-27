const getSteps =() => {
    let steps = [
        {
            title: 'VEREADOR',
            numbers: 5,
            candidates: [
                {
                    number: '38111',
                    name: 'Fulano de Tal',
                    entourage: 'ABC',
                    photos:[
                        {url:'38111.jpg', legend: 'Vereador'}
                    ]
                },
                {
                    number: '77222',
                    name: 'Beltrano da Silva',
                    entourage: 'DEFG',
                    photos:[
                        {url:'77222.jpg', legend: 'Vereador'}
                    ]
                },
            ]
        },
        {
            title: 'PREFEITO',
            numbers: 2,
            candidates: [
                {
                    number: '99',
                    name: 'Ciclano',
                    entourage: 'ABC',
                    vice: 'Cic',
                    photos:[
                        {url:'99.jpg', legend: 'Prefeito'},
                        {url:'99_2.jpg', legend: 'Vice-Prefeito', small: true}
                    ]
                },
                {
                    number: '84',
                    name: 'Zulano',
                    entourage: 'QWERTY',
                    vice: 'Zul',
                    photos:[
                        {url:'84.jpg', legend: 'Prefeito'},
                        {url:'84_2.jpg', legend: 'Vice-Prefeito', small: true}
                    ]
                },
            ]
        }
    ];

    return steps;
}


