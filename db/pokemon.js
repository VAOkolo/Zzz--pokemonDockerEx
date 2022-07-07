const db = connect("mongodb://localhost:27017/pokemon")

db.pokemon.drop()

db.pokemon.insertMany([
    { id: 1, name: 'bulba', type: 'grass/poison' },
    { id: 2, name: 'ivy', type: 'grass/poison' },
    { id: 3, name: 'vena', type: 'grass/poison' },
    { id: 4, name: 'squi', type: 'water' },
    { id: 5, name: 'warto', type: 'water' },
    { id: 6, name: 'blast', type: 'water' },
])

