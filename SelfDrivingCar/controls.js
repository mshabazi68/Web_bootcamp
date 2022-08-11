class Controls{
    constructor (){
        this.forward = false; 
        this.left = false;
        this.right = false; 
        this.reverse= fasle;
    
    this.#addKeyboardListeners();
    
    }
    #addKeyboardListenrs(){
        document.onkeydown=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left = true;
                    break;
                case "ArrowRight":
                    this.right= true;
                    break;
                case "ArrowUp":
                    this.forward=true;
                    break;
                case "ArowDown":
                    this.reverse=true;
                    break;
            }
            console.table(this);
        }
            document.onKeyUp=(event)=>{
                switch(event.key){
                    case "ArrowLeft":
                        this.left = false;
                        break;
                    case "ArrowRight":
                        this.right= false;
                        break;
                    case "ArrowUp":
                        this.forward=false;
                        break;
                    case "ArowDown":
                        this.reverse=false;
                        break;
                }
            console.table(this);
         }
    }
}