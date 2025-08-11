console.log("JS Loaded")
const app= Vue.createApp({
    data() {
        return {
            randUser: {
                Name: "",
                Age: "",
                Avatar: "",
            },
            randWeather: {
                City: "London",
                Province: "ON",
                Country: "CAN",
                Temp: "",
                Wind: "",
                Description: "",
            },
            randDictionary: {
                Word: "",
                Phonetic: "",
                Definition: "",
            },
        }
    },
    created() {
        this.fetchrandUser();
        this.randWeather();
    },
    methods: {
        fetchrandUser() {
            fetch("https://comp6062.liamstewart.ca/random-user-data")
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                else {
                    console.log("Error! Try Again");
                }
            })
            .then(data => {
                this.randUser= {
                    Name: `${data.fullName}`,
                    Age: data.Age,
                    Avatar: data.avatar_url,
                }
            })
            .catch(error => {
                console.log("Failure");
            });
        },
        fetchrandWeather() {
            fetch("https://comp6062.liamstewart.ca/weather-data")
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                else {
                    console.log("Error! Try Again");
                }
            })
            .then(data => {
                this.randWeather= {
                    Temperature: `${data.currentTemp}`,
                    Wind: `${data.currentWind}`,
                    Description: `${data.currentCondition}`,
                }
            })
            .catch(error => {
                console.log("Failure");
            });
        }
    }
});
app.mount("#app")
