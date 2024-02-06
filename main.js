// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const{createApp}=Vue;

const app=createApp({
    data(){
        return{
            emails: []
        }
    },
    methods:{
        generateEmails() {
            
        
            // Svuoto da email precedenti
            this.emails = [];
        
            for (let i = 0; i < 10; i++) {
        
                // Utilizzo la libreria per effettuare la richiesta all'API
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then(response => {
                        const data = response.data;

                        if (data.success) {
                            const email = data.response;
                            this.emails.push(email);
                        } else {
                            console.error('Failed to fetch email');
                        }
                    })
                    .catch(error => console.error('Error fetching email:', error));
            }
        }
        
    },
}).mount('#app');
