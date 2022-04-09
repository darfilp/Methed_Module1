function convertStr(str) {
    str = str.trim().toLowerCase().split('');
    str[0] = str[0].toUpperCase()
    console.log(str.join(''))
};

convertStr('  привет Мир   ');