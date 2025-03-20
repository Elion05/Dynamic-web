"use strict";

// Data simulatie - gebruikers database
const users = [
    { id: 1, name: "Sara", email: "sara@example.com", isAdmin: false },
    { id: 2, name: "Alex", email: "alex@example.com", isAdmin: true },
    { id: 3, name: "Kim", email: "kim@example.com", isAdmin: false }
];

// Functie om een gebruiker op te halen
const getUser = (userId) => {
    // Bug 1: Probeer te vinden waarom dit soms crasht
    const user = users.find(u => u.id === userId);
    if(!user){
        throw new Error(`gebruiker niet gevonden met id ${userId} niet gevonden`); 
    };
    return user.name;
};

// Functie om admin-rechten te controleren
const checkAdminRights = (userId) => {
    // Bug 2: Deze functie werkt niet zoals verwacht
    const user = users.find(u => u.id === userId);
    if(user){
        return user.isAdmin
    }else{
    return false
    }
}

// Functie om e-mail te formatteren
const formatEmail = (email) => {
    // Bug 3: Probleem met de regex
    const username = email.match(/^(.+)@/)[1];
    return username.toUpperCase() + "@" + email.split('@')[1];
};

// Functie om gebruikers te verwerken
const processUsers = () => {
    // Bug 4: Loop probleem
    for (let i = 1; i <= users.length; i++) {
        try {
            const user = getUser(i);
            const isAdmin = checkAdminRights(i);
            const formattedEmail = formatEmail(users[i-1].email);
            console.log(`Verwerkt: ${user} (Admin: ${isAdmin}) - ${formattedEmail}`);
        } catch (error) {
            // Bug 5: Deze error logging is niet informatief genoeg
            console.log("Er ging iets mis");
        }
    
    }
};
// Start het proces

processUsers();


