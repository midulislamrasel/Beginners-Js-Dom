/*
try {
        //code test
    } catch (error) {
        // handle error
}   
*/

/*
try {
    alert("Hello");
    alert = 20;
    
} catch (error) {
    console.log(error);
} finally {
    alert("by by.."); // finally sob somoy kaj korbe 
}
*/

document.querySelector("#chackButton").addEventListener("click", function () {
    var num = document.querySelector("#numField").value;
    try {
        if (num < 5) {
            throw "input is too low"
        }
        else if (num > 10) {
            throw "input is too large"
        }
    } catch (error) {
        console.log(error)
    }
})