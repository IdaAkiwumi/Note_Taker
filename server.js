 function getNoteId() {
        let noteObject = getExistingNotes()
        if (!noteObject) {
            return 1
        }


        const keysArray = Object.keys(noteObject);
        const numberKeys = keysArray.map((key) => Number(key))
        return Math.max(...numberKeys) + 1

    }

    function getExistingNotes() {
        let notes = localStorage.getItem("notes")
        if (!notes) {
            return null
        }
        return JSON.parse(notes)
    }
    






/*
const http = require('http');


const localStorage = http.createServer(function(req,res) {

res.writeHead(200, {'Content-Type': 'text/html'});

res.end(

'notesList'
);


});


localStorage.listen(5500, 'localhost');*/