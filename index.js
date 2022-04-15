const updates = Vue.createApp({
    data(){
        return{
            name:"vue framework f",
            subscribeText: "Subscribe Now",
            books:[
                { author:"Holy spirit", name: "The holy Bible", price:0, completed:true},
                { author:"Chinua Achebe", name: "Things Fall Apart", price:5, completed:false},
                { author:"Casandra Claire", name: "The Mortal Instrument", price:100, completed:true},
                { author:"Ugo C. Ugo", name: "Past Questions", price:1, completed:false},
                { author:"Bright", name: "Brighter Grammar", price:160, completed:true},
                { author:"Lucifer", name: "The devil's handbook", price:0, completed:false}
            ],
        };
    },
});

updates.mount("#app");
