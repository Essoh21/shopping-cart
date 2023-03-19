
import aomineDaiki from './imgs/aomineDaiki.jpg';
import dancingRasta from './imgs/dancingRasta.png';
import earth from './imgs/earth.png';
import earthAndMoon from './imgs/earthAndMoon.png';
import elMatador from './imgs/elMatador.png';
import hulk from './imgs/hulk.png';
import jupiter from './imgs/jupiter.png';
import kiseRoyuta from './imgs/kiseRoyuta.png';
import mars from './imgs/mars.png';
import mercury from './imgs/mercury.png';
import midorimaShintarou from './imgs/midorimaShintarou.png';
import moana from './imgs/moana.png';
import murasakibaraAtsushi from './imgs/muraskibaraAtsushi.png';
import neptune from './imgs/neptune.png';
import saturn from './imgs/saturn.png';
import shakes from './imgs/Shakes.png';
import spiderman from './imgs/spiderman.png';
import taigaKagami from './imgs/taigaKagami.png';
import twistingTyger from './imgs/twistingTyger.png';
import uranus from './imgs/uranus.png';
import venus from './imgs/venus.png';

let images = [
    {
        id: 1,
        src: aomineDaiki,
        title: 'Aomine Daiki',
        type: "Basket",
    },
    {
        id: 2,
        src: earth,
        title: 'Earth',
        type: "Planet",
    },
    {
        id: 3,
        src: dancingRasta,
        title: 'Dancing Rasta',
        type: "Basket",
    },
    {
        id: 4,
        src: earthAndMoon,
        title: 'Earth and Moon',
        type: "Planet",
    },
    {
        id: 5,
        src: elMatador,
        title: 'El Matador',
        type: "Basket",
    },
    {
        id: 6,
        src: hulk,
        title: 'Hulk',
        type: "Actor",
    },
    {
        id: 7,
        src: jupiter,
        title: 'Jupiter',
        type: "Planet",
    },
    {
        id: 8,
        src: kiseRoyuta,
        title: 'Kise Royuta',
        type: "Basket",
    },
    {
        id: 9,
        src: mars,
        title: 'Mars',
        type: "Planet",
    },
    {
        id: 10,
        src: mercury,
        title: 'Mercury',
        type: "Planet",
    },
    {
        id: 11,
        src: midorimaShintarou,
        title: 'Midorima Shintarou',
        type: "Basket",
    },

    {
        id: 12,
        src: moana,
        title: 'Moana',
        type: "Actor",
    },
    {
        id: 13,
        src: murasakibaraAtsushi,
        title: 'Murasakibara Atsushi',
        type: "Basket",
    },
    {
        id: 14,
        src: neptune,
        title: 'Neptune',
        type: "Planet",
    },
    {
        id: 15,
        src: saturn,
        title: 'Saturn',
        type: "Planet",
    },
    {
        id: 16,
        src: shakes,
        title: 'Shakes',
        type: "Foot",
    },
    {
        id: 17,
        src: spiderman,
        title: 'Spider Man',
        type: "Actor",
    },
    {
        id: 18,
        src: taigaKagami,
        title: 'Taiga Kagami',
        type: "Basket",
    },
    {
        id: 19,
        src: twistingTyger,
        title: 'Twisting Tyger',
        type: "Foot",
    },
    {
        id: 20,
        src: uranus,
        title: 'Uranus',
        type: "Planet",
    },
    {
        id: 21,
        src: venus,
        title: 'Venus',
        type: "Planet",
    },
];

images.forEach((image) => {
    image["price"] = Math.round(Math.random() * 40, 2);
    image["number"] = 1;
})

export default images