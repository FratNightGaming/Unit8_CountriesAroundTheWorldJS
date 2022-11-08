class Country 
{
    name;
    language;
    greeting;
    colors;
    flag;

    constructor(name, language, greeting, colors, flag) 
    {
        this.name = name;
        this.language = language;
        this.greeting = greeting;
        this.colors = colors;
        this.flag = flag;
    }
}

let countries = [];
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"], "FlagUS.jpg");
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"], "FlagMexico.jpg");
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"], "FlagAlgeria.jpg")
countries.push(usa);
countries.push(mexico);
countries.push(algeria);

function SwitchCountry() 
{
    let input = document.getElementById("CountryList").value;

    let country;

    if (input === "USA") 
    {
        country = usa;
    }
    else if (input === "Mexico") 
    {
        country = mexico;
    }
    else if (input === "Algeria") 
    {
        country = algeria;
    }

    document.getElementById("CountryName").innerText = input;
    document.getElementById("OfficialLanguage").innerText = country.language;
    document.getElementById("HelloWorld").innerText = country.greeting;

    document.getElementById("Color1").style.backgroundColor = country.colors[0];
    document.getElementById("Color2").style.backgroundColor = country.colors[1];
    document.getElementById("Color3").style.backgroundColor = country.colors[2];

    document.getElementById("flag").src = country.flag;


}
