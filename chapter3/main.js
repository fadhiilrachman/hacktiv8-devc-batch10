// main.js
var count, html, printData = function(search=false) {
    count=0,html='';
    planet_data.forEach(function(planet) {
        count++;
        name=planet.name;
        diameter=planet.diameter;
        climate=planet.climate;
        population=planet.population;
        if(planet.name.toLocaleLowerCase()==search&&search!=name) {
            html+='<tr style="background-color: yellow;">';
        } else {
            html+='<tr>';
        }
        html+='<td>'+count+'.</td>';
        html+='<td>'+name+'</td>';
        html+='<td>'+diameter+'</td>';
        html+='<td>'+climate+'</td>';
        if(population!=='unknown') {
            html+='<td>'+population+'</td>';
        } else {
            html+='<td>0</td>';
        }
        html+='</tr>';
    });
    document.getElementById('doPrint').innerHTML=html;
}, goSearch = function() {
    txt = document.getElementById('search').value;
    if(txt!=='') {
        printData(txt);
    } else {
        alert('Kata pencarian tidak boleh kosong!');
    }
};

printData();