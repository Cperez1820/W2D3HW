// ============================ Static Methods and Properties ==================

//===============================================================================
// 1. There is only one Governor in the state, add static methods and properties you'd expect a Governor to have.
// log the properties and test the methods (don't instantiate)
//=================================================================================


// class Governor {
// }

// class Governor {
  
//        static paperWork() {
//         console.log('Governor is doing paperwork')
//        }
//         static speech() {
//             console.log('Governor is doing paperwork')
//         }
        
//   // this is a property
//   static isOfTheLaw = true

//   //this is a method
//           static working() {
//           console.log('Governor is working hard')
//   }

//           static hardlyWork() {
//           console.log('Governor is hardly working')

//     }
  
//     }



// Governor.working()
// Governor.hardlyWork()
// Governor.paperWork()
// Governor.speech()
// console.log(Governor) 
// ^^ this is the correct way to log static methods and properties.

//  console.log(`The Governor + is ${Governor.working()}`) <----- (is the incorrect way to log 
//                                                                 while using static methods and properties.)



// ==============================Inheritance=========================================

//=========================================================================================
// 2.Think of three properties all people share, set them with the constructor
// Think of three methods all people share
// Create a PostalWorker class that inherits from person, add some methods
// Create a Chef class that inherits from person, add some methods
// Create 2 PostalWorkers and 2 Chefs, log them and test all their methods
// Links to an external site.Hungry for More
// Links to an external site.Hungry For More (Only do this if all your hw above is done)
// Links to an external site.Bank Accounts take it a step further
//==========================================================================================
// Your base class


 class Person {
     constructor(nameparam, breakfastparam,lunchparam,dinerparam){
            this.name = nameparam
            this.breakfast = breakfastparam;
            this.lunch = lunchparam;
            this.diner = dinerparam;
     }
         wakeUpEarly() {
        console.log(` ${this.name}has woke up to go to work`);
}
        driveToWork() {
        console.log(` ${this.name} is driving to work `);
}
        driveBackHome() {
        console.log(` ${this.name}is driving back home`);
}
 }

class PostalWorker extends Person {
                deilversMail(){
                    console.log(" drops off mail")
                }
                deilversPackage(){
                    console.log(" drops off package")
                }
}
class Chef extends Person{
                      cooks(){
                        console.log("cooks on the line")
    }
                     Preps(){
                        console.log("preps for the line")
    }
}

const terry = new Chef ("terry", `BEC`, `BLT`,`chicken over rice`)
const trevor = new Chef ("trevor", `dount`,`salad`,`pasta`)
const tom = new PostalWorker ("tom", `butter roll`,` soup`,` pizza`)
const timmy = new PostalWorker ( "timmy",`SEC`,` H&C roll`,`KBBQ`)

terry.wakeUpEarly()
terry.driveToWork()
terry.driveBackHome()
terry.cooks()
terry.Preps()

console.log(terry)

trevor.wakeUpEarly()
trevor.driveToWork()
trevor.driveBackHome()
trevor.cooks()
trevor.Preps()

console.log(trevor)

tom.wakeUpEarly
tom.driveToWork
tom.driveBackHome
tom.deilversMail
tom.deilversPackage

console.log(tom)

timmy.wakeUpEarly
timmy.driveToWork
timmy.driveBackHome
timmy.deilversMail
timmy.deilversPackage

console.log(timmy)

// ^^ is the only way i can get the code to run (is my answer BTW)
// console.log(terry,trevor,tom,timmy). <--- was how i wanted the code to run 

