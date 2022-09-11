class MathConverter {
    text= ""
    terbaca = ""
    hasil = ""
    angka = ["satu", "dua","tiga","empat","lima","enam","tujuh","delapan","sembilan","sepuluh"]
    pular = [
        {
            text : "ribu",
            result : (num) => num*1000
        },
        {
            text : "ratus",
            result : (num) => num*100
        },
        {
            text : "puluh",
            result : (num) => num*10
        },
    ]
    operator = [
        {
            text : "tambah",
            result : "+"
        },
        {
            text : "kurang",
            result : "-"
        },
        {
            text : "bagi",
            result : "/"
        },
        {
            text : "kali",
            result : "*"
        },
    ]
    constructor(text="") {
        this.text = text
    }

    reader() {
        if(this.text.length == 0)
         {
            return "Kosong"
         }
         
        const strings = this.text.split(" ")
        let temp = 0
        let NumTemp = []
        let hasilTemp = []
        for (const string of strings) {
            temp = this.angka.indexOf(string.toLowerCase())
            if(temp != -1) {
                NumTemp.push(temp+1)
                temp = 0
                continue
            }
            temp = this.pular.findIndex(fil => fil.text == string.toLowerCase())
            if(temp != -1) {
                NumTemp.push(this.pular[temp].result(NumTemp.pop()))
                temp = 0
                continue
            }
            temp = this.operator.findIndex(fil => fil.text == string.toLowerCase())
            if(temp != -1) {
                hasilTemp.push(NumTemp.reduce((a,b) => a+b,0))
                hasilTemp.push(this.operator[temp].result)
                temp = 0
                NumTemp = []
                continue
            }
        }
        if(NumTemp.length > 0) {
            hasilTemp.push(NumTemp.reduce((a,b) => a+b,0))
        }
        return this.read = hasilTemp.join(" ")
    }

    result() {
        if(this.read.length == 0) {
            return "kosong"
        }
        return this.hasil = eval(this.read)
    }
}

function start() {
    
    const readers = new MathConverter( document.querySelector("#text").value )
    document.querySelector(".output.read").innerText = readers.reader()
    document.querySelector(".output.result").innerText = readers.result()

}