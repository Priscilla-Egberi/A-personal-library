const updates = Vue.createApp({
    data(){
        return{
            name:"vue framework f",
            subscribeText: "Subscribe Now",
            books:[
                { author:"Holy spirit", name: "The holy Bible", price:0, completed:true},
                { author:"Chinua Achebe", name: "Things Fall Apart", price:5, completed:false},
                { author:"Ugo C. Ugo", name: "Past Questions", price:1, completed:false},
                { author:"Casandra Claire", name: "The Mortal Instrument", price:100, completed:true},
                { author:"Bright", name: "Brighter Grammar", price:160, completed:true},
                { author:"Lucifer", name: "The devil's handbook", price:0, completed:false}
            ],
            allBooks:null,
        };
    },
    // all functions are declared here
    methods:{
        // to display all books when button is pressed
        getAllBooks(){
            this.allBooks= this.books;
        },
        // to display completed books when button is pressed
        getBooksCompleted(){
            this.allBooks= this.books.filter((book)=> book.completed)
        },
        // to display uncompleted books when button is pressed
        getBooksUncompleted(){
            this.allBooks= this.books.filter((book)=> !book.completed)
        },
        // to display the book with the price inputed in
        

    },

    // functions are called here
    // to display all the books when page is load
    created() {
            this.getAllBooks();
        }
});

updates.mount("#app");
