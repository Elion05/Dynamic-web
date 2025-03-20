"use strict";

    const users = [
        { id: 1, name: "Emma", role: "Admin", lastLogin: "2023-03-15" },
        { id: 2, name: "Thomas", role: "User", lastLogin: "2023-03-17" },
        { id: 3, name: "Sophie", role: "Editor", lastLogin: "2023-03-12" },
        { id: 4, name: "Lucas", role: "User", lastLogin: "2023-03-10" }
    ];

    document.getElementById('showUsers').addEventListener('click', function() {
        // Gebruik console.table om de users weer te geven
        console.table(users);
        
        // Maak een groep voor gebruikersrollen
        console.group("Gebruikersrollen");
        
        for(const user of users){
            if(user.role === "Admin"){
                console.error(`${user.name} heeft Admin-rechten`)
            } else if (user.role === "Editor") {
                console.log(`${user.name} heeft Editor-rechten`);
            } else if (user.role === "User") {
                console.log(`${user.name} heeft User-rechten`);
            }
        }
        
        // Sluit de groep af
        console.groupEnd();
    });
