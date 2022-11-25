let party = [
    {
        name: 'Joline',
        hitpoints: 15,
        belongings: ["spear", "bread", "Tums"],
        companion: {
            name: "Tabby",
            type: "cat",
        }
    },
    {
        name: 'Timothy',
        hitpoints: 10,
        belongings: ["sword", "potion", "Tums"],
        companion: {
            name: "Velma",
            type: "Bat",
        }
    },
    {
        name: 'Sarah',
        hitpoints: 20,
        belongings: ["bow", "arrows", "wood"],
        companion: {
            name: "Tony",
            type: "tiger",
        }
    },
]
// Prompt 1: double the hitpoints of everyone in the party

const doubleHp = party.forEach(el => {
    el.hitpoints = el.hitpoints * 2;
} )

console.log(party[0].hitpoints)
console.log(party[1].hitpoints)
console.log(party[2].hitpoints)

 
//Prompt 2: Timothy has been hit with an arrow, subtract 5 points from his hp
const hitByArrow = party.forEach(el => {
    
   if (el.name == "Timothy") {
      el.hitpoints = el.hitpoints - 5;
   }

} )

console.log(party[0])
console.log(party[1])
console.log(party[2])

//Prompt 3: Sarah's tiger has been turned into a jellyfish by a wizard, please change it
 party[2].companion.type = "jellyfish";

 console.log(party[2])

 
 //Prompt 4: Timothy drank this potion. Raise his hitpoints by 20 and remove "potion" from his belongings.
 
 
 const takePotion = party.forEach(el => {
   if (el.name == "Timothy") {
    el.hitpoints = el.hitpoints + 20;
    el.belongings.splice(1,1);
}


 })
 console.log(party[0]);
 console.log(party[1]);
 console.log(party[2]);


 //Prompt 5: Timothy got hungry and stole Joline's bread. Take it out of her belongings and put it  into Timothy's belongings. 
let returnedItem;
const stealingGoods = party.forEach(el => {
    if (el.name == "Joline") {
        let returnedArray = el.belongings.splice(1,1)
        returnedItem = returnedArray[0]

    }
         
    else if (el.name == "Timothy") {
        el.belongings.push(returnedItem);
    }
 })

 console.log(party[0]);
 console.log(party[1]);
 console.log(party[2]);
 

 //Promt 6: Joline got upset and left the party. Take her out of the array. (leaving member is parameter)

const removeMember = (member) => {
     party.forEach ((el, index) => {
        if (el.name == member){
            party.splice(index,1)
        }
     } )
        
    
};
removeMember("Joline");

 
console.log(party);


 //Prompt 7: Timothy and Sarah have been recruiting. Add a new adventurer to the party. (new adventurer is parameter)

 const createNewMember = (newMember) => {
        party.push(newMember);
       
 }

 let Dre = {
    name: 'Dre',
    hitpoints: 30,
    belongings: ["axe", "rope", "fire starter"]

};
createNewMember(Dre);
console.log(party)
 //Prompt 8: The party has been doing well! They found 200 gold. Create a new property called gold and split the gold evenly between everyone. (amount of gold is parameter) 

 let goldFound = 200;
 
 const divyUp = () => {
    party.forEach(el => {
        el.gold = goldFound / 3;
    } )
   
}
divyUp(goldFound);

console.log(party);

//Prompt 9: Sarah is tired of taking care of a jellyfish. Subtract some gold from her and change her companion to a bear.

party.forEach(el => {
    if (el.name == "Sarah") {
        el.gold = el.gold - 20;
        el.companion = "bear";
    }
})

console.log(party[1])

//Prompt 10: Timothy’s sword has gotten old. Change it to “Rusty Sword" 

//party.forEach(el => {
  //  if (el.name == "Timothy") {
       
        
//})


//Prompt 11: Write a function called setLeader that takes a name as a parameter. The member with that name should have a new property leader: true while the other members have leader: false.

let leader = "Dre";

const setLeader = () => {
    party.forEach(el => {
        if (el.name == leader) {
            el.leader = true;   
        }
        else {
            el.leader = false;
        }
    });
}
setLeader(leader)
console.log(party);