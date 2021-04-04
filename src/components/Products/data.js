import product1 from '../../images/product-1.jpg'
import product2 from '../../images/product-2.jpg'
import product3 from '../../images/product-3.jpg'

import sweet1 from '../../images/sweet-1.jpg'
import sweet2 from '../../images/sweet-2.jpg'
import sweet3 from '../../images/sweet-3.jpg'
import sweet4 from '../../images/sweet-4.jpg'
import sweet5 from '../../images/sweet-5.jpg'
import sweet6 from '../../images/sweet-6.jpg'
import sweet7 from '../../images/sweet-7.jpg'


/* Tableau pour les plats (page accueil) */
export const ProductData = [
    {
        img: product1,
        name: 'Mouton au 4 légumes',
        desc: 'Beau morceau de mouton, accompagné de pomme de terre au four, brocolis, champignons, et tomates.',
        price: 13.75,
        path: '/carte',
        button: 'Voir la carte'
    },
    {
        img: product2,
        name: 'Ailes de poulet à la salade de saison',
        desc: 'Deux ailes de poulet vous attendent accompagné de sa salade composée de produit frais, locaux, et de ' +
          'saison. Le tout accompagné d\'une sauce légèrement relevée.',
        price: 12.99,
        path: '/carte',
        button: 'Voir la carte'
    },
    {
        img: product3,
        name: 'Viande farcie et pâtes au 3 poivrons et tomate',
        desc: 'Viande farcie accompagné de pâtes sur une sauce au 3 poivrons, tomate, et basilic.',
        price: 14.99,
        path: '/carte',
        button: 'Voir la carte'
    }
];

/* Tableau pour les desserts (page accueil) */
export const ProductDataTwo = [
    {
        img: sweet1,
        name: 'Crêpes et bananes flambées',
        desc: 'Bananes flambées au grand Marnier enroulées dans des crêpes savoureuses',
        price: 5.50,
        path: '/carte',
        button: 'Voir la carte'
    },
    {
        img: sweet2,
        name: 'Cheesecake au coulis de fruit rouge',
        desc: 'Belle part de cheesecake avec son coulis de fruit rouge',
        price: 6.99,
        path: '/carte',
        button: 'Voir la carte'
    },
    {
        img: sweet3,
        name: 'Tout chocolat',
        desc: 'Mousse au chocolat cachée dans une belle part de fondant au chocolat, sur un liseret de chocolat fondu',
        price: 4.75,
        path: '/carte',
        button: 'Voir la carte'
    },
];

/* Tableau pour les bouteilles (page carte) */
export const ProductDataThree = [
    {
        name: 'Sancerre Pente de Maimbray 2019 - DOMAINE PAUL VATTAN',
        desc: 'Vin blanc - 75cl',
        price: 15.00,
        path: '/reservation',
        button: 'Réserver une table'
    },
    {
        name: 'Quarts de Chaume Grand Cru 2018 - DOMAINE Chateau Pierre Bise',
        desc: 'Vin blanc - 75cl',
        price: 35.00,
        path: '/reservation',
        button: 'Réserver une table'
    },
    {
        name: 'Grand Vin Rouge de Bordeaux Médoc 2015 - DOMAINE Château La Tour Cordouan  ',
        desc: 'Vin rouge - 75cl',
        price: 13.99,
        path: '/reservation',
        button: 'Réserver une table'
    },
    {
        name: 'Saint-Emilion Grand Cru 2018 - DOMAINE Château Mangot',
        desc: 'Vin rouge - 75cl',
        price: 22.50,
        path: '/reservation',
        button: 'Réserver une table'
    },
    {
        name: 'Pecchenino 2016 - DOMAINE Langhe Pinot Nero DOC',
        desc: 'Vin rouge - 75cl',
        price: 21.50,
        path: '/reservation',
        button: 'Réserver une table'
    },
    {
        name: 'Côtes de Provence Rosé 2020',
        desc: 'Rosé - 75cl',
        price: 13.00,
        path: '/reservation',
        button: 'Réserver une table'
    }
];

/* Tableau pour les desserts (page carte) */
export const ProductDataFour = [
    {
        img: sweet1,
        name: 'Crêpes et bananes flambées',
        desc: 'Bananes flambées au grand Marnier enroulées dans des crêpes savoureuses',
        price: 5.50,
        path: '/reservation',
        button: 'Réserver une table'
    },
    {
        img: sweet2,
        name: 'Cheesecake au coulis de fruit rouge',
        desc: 'Belle part de cheesecake avec son coulis de fruit rouge',
        price: 6.99,
        path: '/reservation',
        button: 'Réserver une table'
    },
    {
        img: sweet3,
        name: 'Tout chocolat',
        desc: 'Mousse au chocolat cachée dans une belle part de fondant au chocolat, sur un liseret de chocolat fondu',
        price: 4.75,
        path: '/reservation',
        button: 'Réserver une table'
    },
    {
        img: sweet4,
        name: 'Salade de fruit',
        desc: 'Salade de fruit composée exclusivement de fruit frais, et de saison',
        price: 5.20,
        path: '/reservation',
        button: 'Réserver une table'
    },
    {
        img: sweet5,
        name: 'Les 3 boules de saison',
        desc: '3 boules de glaces vanille et chocolat fondu vous attendent dans un ramequin composée ' +
          'd\'un fruit de saison',
        price: 4.10,
        path: '/reservation',
        button: 'Réserver une table'
    },
    {
        img: sweet6,
        name: 'Tiramisu au 3 chocolats',
        desc: 'Tiramisu au biscuit chocolat noir et chocolat au lait, soupoudré de chocolat noisette',
        price: 6.99,
        path: '/reservation',
        button: 'Réserver une table'
    },
    {
        img: sweet7,
        name: 'Cupcake framboise',
        desc: 'Petits cupcakes tout framboise avec une chantilly framboise maison',
        price: 6.00,
        path: '/reservation',
        button: 'Réserver une table'
    }
];