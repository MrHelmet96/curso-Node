const heroes = [
{
    id: 1,
    name: 'Batman',
    owner: 'DC',
},
{
    id: 2,
    name: 'Spiderman',
    owner: 'Marvel',
},
{
    id: 3,
    name: 'Superman',
    owner: 'DC',
}];

const findHeroById = (id : number) => {
    return heroes.find((hero) => hero.id === id);
}

const hero = findHeroById(1);

console.log(hero?.name ?? 'Hero not found!');