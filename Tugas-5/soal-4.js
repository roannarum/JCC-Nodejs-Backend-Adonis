function nilaiTertinggi(siswa){
    var output = {}

    for (var i = 0; i < siswa.length; i++){
        var currentSiswa = siswa[i]
        var currentClass = currentSiswa.class

        if (!output.hasOwnProperty(currentClass)){
            output[currentClass] = {
                name: currentSiswa.name,
                score: currentSiswa.score
            }
        }else {
            var existingSiswa = output[currentClass]
            if(currentSiswa.score > existingSiswa.score){
                output[currentClass] = currentSiswa
            }
        }
    }
    return output
}


console.log(nilaiTertinggi([
    {
      name: 'Asep',
      score: 90,
      class: 'adonis'
    },
    {
      name: 'Ahmad',
      score: 85,
      class: 'vuejs'
    },
    {
      name: 'Regi',
      score: 74,
      class: 'adonis'
    },
    {
      name: 'Afrida',
      score: 78,
      class: 'reactjs'
    }
  ]));

  console.log(nilaiTertinggi([
    {
      name: 'Bondra',
      score: 100,
      class: 'adonis'
    },
    {
      name: 'Putri',
      score: 76,
      class: 'laravel'
    },
    {
      name: 'Iqbal',
      score: 92,
      class: 'adonis'
    },
    {
      name: 'Tyar',
      score: 71,
      class: 'laravel'
    },
    {
      name: 'Hilmy',
      score: 80,
      class: 'vuejs'
    }
  ]));