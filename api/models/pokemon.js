//import database as class interacts with that data
const { init } = require ('../dbConfig')
const { ObjectId } = require('mongodb')

class Pokemon {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.type = data.type
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
        try {
        const db = await init()
        console.log(db);
        const pokeData = await db.collection('pokemon').find().toArray()
        const pokemon = pokeData.map(poke => new Pokemon(poke))
        resolve(pokemon)
        console.log("*******************")
        console.log(pokemon)
        console.log("*******************")
        } catch(err){
            console.log(err);
            reject('Error retrieving pokemon')
        }
    })
    }

    // static findById(id) {
    //     const pokemonData = pokeData.filter((poke) => poke.id === id)[0];
    //     if (!pokemonData) {
    //         return;
    //     }
    //     const pokemon = new Pokemon (pokemonData);
    //     return pokemon
    // }

    // static create(poke) {
    //     const newPokeId = pokeData.length + 1;
    //     const newPoke = new Pokemon({ id: newPokeId, ...poke });
    //     pokeData.push(newPoke);
    //     return newPoke;
    // }

    // destroy() {
    //     const pokemon = pokeData.filter((poke) => poke.id === this.id)[0];
    //     pokeData.splice(pokeData.indexOf(pokemon), 1);
    // }
}

module.exports = Pokemon;
