// main.js
var count=0, goSearch = function() {
    txt = document.getElementById('search').value;
    if(txt!=='') {
        planet_data.forEach(function(planet) {
            if(planet.name.toLocaleLowerCase()==txt) {
                alert('Nama planet tersedia');
            }
        });
    } else {
        alert('Kata pencarian tidak boleh kosong!');
    }
}, html='';

planet_data.forEach(function(planet) {
    count++;
    name=planet.name;
    diameter=planet.diameter;
    climate=planet.climate;
    population=planet.population;
    html+='<tr>';
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