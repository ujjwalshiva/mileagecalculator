console.log("Initializing App...");

//Formula: [Current - Previous] / fuel

function calculate() {


    let current=document.querySelector('#current').value;
    let previous=document.querySelector('#previous').value;
    let fuel=document.querySelector('#fuel').value;

    if (current=='' || previous==''|| fuel=='') {
        document.querySelector('#final').innerHTML=`<h4 style='color:#ef5350'>Enter Values</h4>`;
    }

    else {
        
        let km = current - previous;
        let mileage = (km/fuel).toFixed(0);

        document.querySelector('#final').innerHTML=`Your Mileage is ${mileage} km/L <br> Hello`;      
    
        console.log(km, mileage);
    }

    
}
