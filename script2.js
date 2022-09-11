class NumberIntoText {
    expression = ""
    readed = ""
    hasil = ""
    angka = ["satu", "dua", "tiga","empat","lima","enam","tujuh","delapan","sembilan"]
    satu = ["sepuluh", "seratus","seribu"]
    operator = [
        ["+", "tambah"],
        ["-", "kurang"],
        ["/", "bagi"],
        ["*", "kali"],
    ]
    pural = [
        "","puluh","ratus","ribu", "juta", "milyar"
    ]
    constructor(expression="") {
        this.expression = expression
    }
    read() {
        if(this.expression.length == 0) {
            return "Kosong"
        }
        const strings = this.expression.split("")
        let hitung = []
        let operator = -1
        let terhitung = 0
        let textTemp = []
        let hasilTemp = []
        let temp = 0
        for(const string of strings) {
           
            if(!Number.isNaN(parseInt(string))) {
                textTemp.push(parseInt(string))
                continue
            }
            temp = this.operator.findIndex(fil => fil[0] == string.toLowerCase())
            if(temp != -1) {
                hasilTemp.push(this.gabung(textTemp))
                hasilTemp.push(this.operator[temp][1])
                if(operator != -1) {
                    hitung[1] = parseInt(textTemp.reverse().reduce((a,b) => a+b, "")) 
                    terhitung = this.hitung(hitung, operator)
                    hitung = []
                }
                operator = temp
                hitung[0] = terhitung == 0? parseInt(textTemp.reverse().reduce((a,b) => a+b, "")) : terhitung
                textTemp = []
                
            }
        }
        if(textTemp.length > 0) {
            let gabung = this.gabung(textTemp)
            hasilTemp.push(gabung)
            if(operator != -1) {
                hitung[1] = parseInt(textTemp.reverse().reduce((a,b) => a+b, "")) 
                terhitung = this.hitung(hitung, operator)
            } else {
                terhitung = textTemp.reverse().join("")
            }

        }
        
        console.log(terhitung)
        console.log(hasilTemp)
        this.hasil = terhitung
        return this.readed = hasilTemp.join(" ")
    }

    hitung(num, operator) {
        
        switch(operator) {
            case 0: 
                return num[0]+num[1]
                
            case 1: 
                return num[0]-num[1]
            case 2: 
                return num[0]/num[1]
            case 3: 
                return num[0]*num[1]

        }
    }

    gabung(arr) {
        const hasil = []
        let count = 0
        const reverses = arr.reverse()
        for(let temp of reverses) {
           
           if(temp == 0) {
            if(arr.length == 1) {
                hasil.push("nol")
            }
            count++
            continue
           } 
           if(count == 1 && arr.at(0) > 0 && temp == 1) {
             if(arr.at(0) == 1) {
                hasil.pop()
                hasil.push("sebelas")
             } else {
                 hasil.push(hasil.pop() + " belas")
             }
             count++
             continue
           }
           if(temp == 1 && (count > 0 && count < 4)) {
            hasil.push(this.satu[count++-1])
            continue
           }
           hasil.push(this.angka[temp-1]+" "+this.pural[count++])
        }
        return hasil.reverse().join(" ")
    }
    samadengan() {
        let temp = (""+this.hasil).split("")
        return this.gabung(temp)
    }
    getHasil() {
        return this.hasil
    }
}

function start2() {
    const readers2 = new NumberIntoText(document.querySelector("#text2").value)
    document.querySelector(".output.read2").innerText = readers2.read()
    document.querySelector(".output.result2").innerText = readers2.samadengan()
    document.querySelector(".output.result3").innerText = readers2.getHasil()
}