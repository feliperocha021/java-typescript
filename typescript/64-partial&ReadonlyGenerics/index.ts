interface UserSettings{
    username: string,
    email: string,
    darkMode: boolean,
    language: string,
}

// O Partial<UserSettings> tornará as outras propriedades obrigatórias que não foram definidas como opcionais
// também pode adicionar mais propriedades
function updateUserSettings(partialSettings: Partial<UserSettings>) {
    console.log('updating: ', partialSettings)
}
const user: UserSettings = {
    username: 'jhon',
    email: 'jhon@gmail.com',
    darkMode: false,
    language: 'en'
}

const newSettings = {
    darkMode: true,
    language: 'fr',
}

updateUserSettings(newSettings);

// faz com que nenhum elemnto seja inserido ou excluido
// também funciona em objetos
let arr: Readonly<string[]> = ['jhon', 'marry'];
// arr.push('mark'); error
// arr.pop(); error
console.log(arr);

export default undefined