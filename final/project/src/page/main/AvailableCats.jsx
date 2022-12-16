import React, { useState } from 'react';

import Modal from '../../shared/components/Modal';
import Card from '../../shared/components/Card';

function AvailableCats() {
    const cats = [
        {
            name: 'Brit',
            id: '204525',
            age: '3 Months 3 Weeks',
            image: 'http://placekitten.com/g/300/300',
            breed: 'Domestic Short Hair',
            weight: '9 Lbs',
            sex: 'Male',
            location: 'Animal Community Center - Milpitas',
            description:
                "Hello! Are you looking for a social kitty who loves getting showered with attention? Look no further, because I'm your kitty! I love it all, cuddling close, playing with toys, you name it. My purr motor doesn't take long to start up, and once it gets going it will run non-stop. If I sound like the perfect kitty for you, ask to meet me today.",
        },
        {
            name: 'Willie',
            id: '202160',
            age: '6 Years 2 Months 2 Weeks',
            image: 'http://placekitten.com/g/301/301',
            breed: 'Domestic Short Hair',
            weight: '17.3 Lbs',
            sex: 'Neutered Male',
            location: 'Animal Community Center - Milpitas',
            description:
                "Hi there! I'm the big boy on the block. I might be a bit shy at first. Don't worry, my standoffish guise changes as I relax, get to know you, and acclimate to my surroundings. I love being pet, even when I'm nervous. I just need a kind person who is willing to be patient. Outside of that, I swear my good looks will win you over when you look into my pretty face. I have gotten along with other felines over the years so I should do okay with another kitty or two with proper introductions. I may even do better with a feline friend to show me the ropes in my new home. So, are you ready to meet me? Come visit me soon.",
        },
        {
            name: 'Percy',
            id: '202071',
            age: '5 Months 2 Weeeks',
            image: 'http://placekitten.com/g/302/302',
            breed: 'Domestic Short Hair Mix',
            weight: '7 Lbs',
            sex: 'Neutered Male',
            location: 'Animal Community Center - Milpitas',
            description:
                "Hello! Are you looking for a social kitty who loves getting showered with attention? Look no further, because I'm your kitty! I love it all, cuddling close, playing with toys, you name it. My purr motor doesn't take long to start up, and once it gets going it will run non-stop. I made a kitty friend recently named Mike. He and I like cuddling together so we'd love to go home together. If I sound like the perfect kitty for you, ask to meet me today.",
        },
        {
            name: 'Prudence',
            id: '204496',
            age: '12 Years',
            image: 'http://placekitten.com/g/303/303',
            breed: 'Domestic Medium Hair Mix',
            weight: '10 Lbs',
            sex: 'Spayed Female',
            location: 'Animal Community Center - Milpitas',
            description:
                "A social kitten who loves to cuddle with people and play with toys. They approach people right away for attention and love to play with wand toys. Once they're transitioned into a new place they love to explore and run around.",
        },
        {
            name: 'Beezus',
            id: '203958',
            age: '2 Years',
            image: 'http://placekitten.com/g/303/304',
            breed: 'Domestic Medium Hair Mix',
            weight: '8 Lbs',
            sex: 'Spayed Female',
            location: 'Animal Community Center - Milpitas',
            description:
                'Beezus is a shy but playful cat. She loves playing with her sister, Ramona and with the feathered wand toy and the laser light, chasing it all over the room. Beezus loves cheek and chin rubs and all over pets when play time is over. She will need someone who is patient with her, who will take the time to gain her trust. Then she will melt in your arms and you will hear her soft purring.',
        },
        {
            name: 'Ramona',
            id: '203957',
            age: '2 Weeks',
            image: 'http://placekitten.com/g/305/305',
            breed: 'Domestic Short Hair Mix',
            weight: '3.6 Lbs',
            sex: 'Spayed Female',
            location: 'Animal Community Center - Milpitas',
            description:
                'Ramona is a shy but playful kitten. She loves playing with her sister, Beezus and with the feathered wand toy and the laser light, chasing it all over the room. Ramona loves cheek and chin rubs and all over pets. She will need someone who is patient with her, who will take the time to gain her trust. Then she will melt in your arms and you will hear her soft purring.',
        },
    ];

    const [open, setOpen] = useState(false);

    const [isClicked, setIsClicked] = useState()

    const handleOpen = (id) => {
        setIsClicked(cats.find((cat) => cat.id === id))
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setIsClicked();
    };

    return (
        <main id='AvailableCats'>
            <h2>Adopt a Cat 😽</h2>
            <div className='card-container'>
                {cats.map((cat) => (
                    <Card cat={cat} handleOpen={handleOpen} key={cat.id} />
                ))}               
                {(open && setIsClicked) && <Modal handleClose={handleClose} cat={isClicked} />}
            </div>
        </main>
    );
}

export default AvailableCats;
