const { response } = require("express");
const fetch = require('node-fetch');

const controller = {

    home: (req,res) => {
        res.send("Hello. Welcome")
    },

    searchClient: async (req, res) => {


        fetch("https://api.gueno.com.ar/challenge/getCuit/"+req.params.id)
            .then(response => response.json())
            .then(getCuit => 
                fetch("https://api.gueno.com.ar/challenge/getUserData/" + getCuit.data.cuit)
            .then(response => response.json())
            .then(infoClient => {
                let data = infoClient.data;
                let scoring = undefined;

                if(data.scoring.approved == true) {
                    scoring = "Aprobado";
                } else if (data.scoring.approved == false) {
                    scoring = "Rechazado";
                }

                let birthday = data.birthday;

                let dmy = birthday.match(/\d{4}.\d{2}.\d{2}/);

                var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
                  
                var date = new Date(dmy[0]);
                var day = date.getDate();
                var month = date.getMonth();
                var year = date.getFullYear();
                var fecha_formateada = (day + 1) + ' de ' + months[month] + ' de ' + year;
                
                /*console.log(`
                birthday: ${birthday}
                dmy: ${dmy}
                fecha formateada: ${fecha_formateada}
                `)*/
                res.json({
                    "fullname" : data.name + " " + data.surname,
                    "birthday" : fecha_formateada,
                    "scoring" : scoring,
                    "cuit" : getCuit.data.cuit
                })
            }))

            
            

    }

}

module.exports = controller;