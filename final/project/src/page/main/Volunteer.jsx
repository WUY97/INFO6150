import React from 'react';

import Panel from '../.././shared/components/Panel';

function Volunteer() {
    const shelters = [
        {
            image: 'http://placekitten.com/g/800/800',
            title: 'Silicon Valley Animal Control Authority',
            website: 'https://www.svaca.com/',
            description:
                'Welcome to SVACA MaddiesFundHomeThe Silicon Valley Animal Control Authority (SVACA) provides the cities of Campbell, Monte Sereno, Mountain View, and Santa Clara with the care of sick, injured, lost and abandoned companion animals, animal cruelty investigations, enforcement of animal laws, education and outreach programs, volunteer and foster programs, and so much more. Our adoption program is open to all Bay Area residents.',
            redirect: 'https://goo.gl/maps/q6ULe4srQ8PqdUDp7',
            address: '3370 Thomas Rd, Santa Clara, CA 95054',
            map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d50710.51808262295!2d-122.0531821!3d37.4038449!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc985f2e1dc8d%3A0x4a06f91ec4924a37!2sSilicon%20Valley%20Animal%20Control%20Authority!5e0!3m2!1szh-CN!2sus!4v1669497769947!5m2!1sen-US!2sus',
        },
        {
            image: 'http://placekitten.com/g/700/700',
            title: 'Palo Alto Animal Services',
            website: 'https://www.paloaltohumane.org/',
            description:
                'The Palo Alto Humane Society is a 501(c) 3 nonprofit, charitable, volunteer-supported organization. PAHS is one of the few humane societies nationwide with no animal shelter. Instead of managing animals inside a shelter, we work to keep animals out of the shelter through humane programs in intervention, advocacy, and education. For a century, our mission has been to alleviate the suffering of animals, increase public sensitivity to animal issues, and elevate the status of animals in our society.',
            redirect: 'https://goo.gl/maps/P8Mdd3zEsB3U7ExbA',
            address: '3281 E Bayshore Rd, Palo Alto, CA 94303',
            map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d50687.44391666727!2d-122.1798294!3d37.4379258!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba48edf9a23d%3A0xc7060ed5097b6863!2sPalo%20Alto%20Animal%20Services!5e0!3m2!1szh-CN!2sus!4v1669498115564!5m2!1sen-US!2sus'
        },
        {
            image: 'http://placekitten.com/g/900/900',
            title: 'Humane Society Silicon Valley',
            website: 'https://www.hssv.org/',
            description:
                'Humane Society Silicon Valley (HSSV) is the world’s first model shelter, accomplished by meeting the guidelines put forth by the Association of Shelter Veterinarians. Established in 1929, the organization offers quality adoptions, affordable spaying/neutering, vaccinations and microchipping services, pet care services and education programs to enhance the human-animal bond. HSSV operates 24 hours a day, 365 days a year. We are also the first animal community center in the nation to receive Gold LEED (Leadership in Energy and Environmental Design) certification from the U.S. Green Building Council.',
            redirect: 'https://g.page/humanesocietysv?share',
            address: '901 Ames Ave, Milpitas, CA 95035',
            map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6647342864535!2d-121.8866968!3d37.421398599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcec68503ee83%3A0x43636332f947b20d!2sHumane%20Society%20Silicon%20Valley!5e0!3m2!1szh-CN!2sus!4v1669498198749!5m2!1sen-US!2sus'
        },
        {
            image: 'http://placekitten.com/g/1000/1000',
            title: 'City of San José Animal Care Center',
            website: 'http://www.sanjoseanimals.com',
            description:
                'Animal Care & Services (ACS) is a full-service division that offers the community many valuable programs and services. Within ACS are four units: Field Operations, Medical Operations, Shelter Operations and Administration. Although each unit is responsible for different aspects of ACS, they are dependent upon each other and work together cohesively to best benefit both the animals and the community.',
            redirect: 'https://goo.gl/maps/giio7w3GBHyv1Dt19',
            address: '2750 Monterey Hwy, San Jose, CA 95111',
            map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d50784.7447756409!2d-121.9206045!3d37.2940306!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e32ff507479cb%3A0xe9bad2e641b880ff!2sCity%20of%20San%20Jos%C3%A9%20Animal%20Care%20Center!5e0!3m2!1szh-CN!2sus!4v1669498242812!5m2!1sen-US!2sus'
        },
        {
            image: 'http://placekitten.com/g/901/901',
            title: 'Tri-City Animal Shelter',
            website: 'http://www.tricityanimalshelter.org/',
            description:
                "The Fremont Police Department's Animal Services Unit manages the Tri-City Animal Shelter which shelters animals found in Fremont, Union City and Newark. Union City and Newark have their own Animal Services Officers who respond to animal related concerns within their city. Tri-City Animal Shelter staff reunite lost pets with their owners, provide care for injured animals and license pets residing in Fremont. Animal Services Officers respond to animal-related calls for service from citizens of the City of Fremont.",
            redirect: 'https://goo.gl/maps/qY4oSiNLSVcannz6A',
            address: '1950 Stevenson Blvd, Fremont, CA 94538',
            map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d202382.4786989665!2d-122.1461752!3d37.5732902!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc0ed2188cf37%3A0x5493d53a88897aae!2sTri-City%20Animal%20Shelter!5e0!3m2!1szh-CN!2sus!4v1669498277128!5m2!1sen-US!2sus',
        },
        {
            image: 'http://placekitten.com/g/902/902',
            title: 'Pets In Need Redwood City',
            website: 'https://www.petsinneed.org/',
            description:
                'As a 501(c) 3 non-profit animal shelter, we transfer in dogs and cats from public shelters where they are in danger of being euthanized due to space or financial limitations. We then provide them with the best possible care and enrichment until we can help them find their forever homes.',
            redirect: 'https://goo.gl/maps/LHsG8P1w9e1kB7Mb7',
            address: '871 Fifth Ave, Redwood City, CA 94063',
            map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d50658.07695563877!2d-122.2691378!3d37.481263!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fa31675f8e0bf%3A0xf674c571d1cf207e!2sPets%20In%20Need%20Redwood%20City!5e0!3m2!1szh-CN!2sus!4v1669498315999!5m2!1sen-US!2sus',
        },
        {
            image: 'http://placekitten.com/g/903/903',
            title: 'Hayward Animal Shelter',
            website: 'http://www.haywardanimals.org/',
            description:
                "We're dedicated to improving the lives of all animals during their stay at the shelter and helping to improve their chances of adoption.",
            redirect: 'https://goo.gl/maps/u4JtJr8gu9hvF53m9',
            address: '16 Barnes Ct, Hayward, CA 94544',
            map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d404096.2629652222!2d-122.5693487!3d37.6961508!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f9159257b0ded%3A0xb9c6185a9c9bb4e5!2sHayward%20Animal%20Shelter!5e0!3m2!1szh-CN!2sus!4v1669498348322!5m2!1sen-US!2sus',
        },
    ];

    return (
        <main id='Volunteer'>
            <div className='main-container'>
            <h2>Volunteer Opportunities Nearby</h2>
            <div className='panel-container'>
                {shelters.map((shelter, index) => (
                    <Panel shelter={shelter} key={index} />
                ))}
            </div>
            </div>
        </main>
    );
}

export default Volunteer;
