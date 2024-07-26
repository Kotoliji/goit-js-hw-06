class Storage{
    #itaems(){
        storegList = {
            item
        };        
    }
    constructor(musItems){
        this.storegList ={ 
            item:musItems
        };
        
    }

     getItems(){
         return this.storegList.item;
    }
    addItem(newItem){
        this.storegList.item.push(newItem);
    }
    removeItem(itemToRemove){
        if(this.storegList.item.indexOf(itemToRemove) == -1){
            return this.storegList.item
        }else{
            this.storegList.item.splice(this.storegList.item.indexOf(itemToRemove),1)
        }
    }
   }


const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]






