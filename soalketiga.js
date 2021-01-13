var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum mi eu magna fermentum, vel luctus tellus semper. Nunc dignissim eleifend ipsum, nec viverra mauris pellentesque non. Fusce auctor ex id mauris egestas, quis luctus nunc pharetra. Sed in dignissim nisi. Aliquam sed tempor urna, nec aliquam mi. Aenean eu feugiat lacus, vel dictum eros. Nulla condimentum porttitor aliquet. Vestibulum vehicula elit non arcu auctor maximus. Quisque est eros, maximus nec diam faucibus, mollis odio.";
var new_data = {};


text.replace(/\W/g, '').split('').map(function(value){
    value = value.toLocaleLowerCase();

    if(value != ' ') {
        if(typeof new_data[value] == 'undefined') {
            new_data[value] = 1
        } else {
            new_data[value] = new_data[value] + 1
        }
    }
})

Object.keys(new_data).forEach((v) => console.log(`karakter ${v} sebanyak ${new_data[v]} kali`));
