 
    // ************** setTimeout  width setTimeout ************** //
    /*
            let count = 3;

            let ans = setTimeout(great,1000);

            function great(){

                if(count>5){
                    //clearTimeout(ans)
                    console.log("stoped");
                }
                else{
                    console.log("Started");
                }
            }
    */



/*

    // ************** setTimeout Time function **************** //
    let count = 0;
    let ans = setTimeout(great, 2000);
    
    function great() {
        // count++;
        if (count >1) {
            clearInterval(ans)
            console.log("Loop stoped");
        }
        else {
            let dob = new Date();
            console.log(dob.toLocaleTimeString());
            console.log(dob.toLocaleDateString());
            // console.log("");
        }
    }
    
*/



    
    // ***************** setInterval ********************** //

    let count = 0;
    let ans = setInterval(great, 2000);
    
    function great() {
        count++;
        if (count >3) {
            clearInterval(ans)
            console.log("Loop stoped");
        }
        else {
            let dob = new Date();
            console.log(dob.toLocaleTimeString());
            console.log(dob.toLocaleDateString());
            console.log("");
        }
    }












    // one time process after refresh the 2000 milli seconds
    // setTimeout(great, 2000);
    // function great() {
    //     console.log("world");
    // }
