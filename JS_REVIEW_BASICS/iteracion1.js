//1

const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

const categoriesKey = []
for (const type of movies){
    for (const key of type.categories) {
    if (!categoriesKey.includes(key)) {
        categoriesKey.push(key)
    }
    } 
    };
    
console.log(categoriesKey);


//2

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let totalVolume = 0;

for (const user of users) {
    for (const key in user.favoritesSounds) {
     totalVolume += user.favoritesSounds[key].volume   
            
        }
    };

console.log(totalVolume);

const volumeAverage = totalVolume / users.length;
console.log(volumeAverage);
    
//3

let userFavorite = [];

for (const user of users) {
    for (const favSound in user.favoritesSounds) {
    if (userFavorite[favSound]){
        userFavorite[favSound]++
    } else {userFavorite[favSound] = 1}
    }
};
console.log(userFavorite);

//4

