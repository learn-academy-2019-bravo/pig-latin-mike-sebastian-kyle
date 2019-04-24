// describe("vowelCheck", () => {
//     test ("For words beginning with a vowel, add way to the end.", () => {
//         expect(vowelCheck("apple")).toBe("appleway")
//         expect(vowelCheck("dog")).toBe("dog")
//     })
// })
// const vowels = ["a","e","i","o","u","A","E","I","O","U"]
//
// // function to translate words starting with vowels
// const vowelCheck = (string)=> {
//     if(string.charAt(0) === "a" || string.charAt(0) === "e" || string.charAt(0) === "i" || string.charAt(0) === "u" || string.charAt(0) === "A" || string.charAt(0) === "E" || string.charAt(0) === "I" || string.charAt(0) === "O " || string.charAt(0) === "U"){
//         return `${string}way`
//     }else{ return string}
// }

// describe("quCheck", () => {
//     test ("If the first consonants include qu, move the u along with the q. Don't forget about words like squeal where qu doesn't come first", () => {
//         expect(quCheck("squeal")).toBe("ealsquay")
//         expect(quCheck("dog")).toBe("ogday")
//         expect(quCheck("quest")).toBe("estquay")
//         expect(quCheck("string")).toBe("ingstray")
//         expect(quCheck("apple")).toBe("appleway")
//
//
//     })
// })
// begin OG code (non Regex)
var userinput = "This is a test"
var newArr = userinput.split(" ")
//var finalTrans = finalArr.tostring(" ");
var finalArr = newArr.map(quCheck)
console.log(finalArr);
console.log(finalArr.join(" "));
function quCheck(string){
    if(string.charAt(0) === "a" || string.charAt(0) === "e" || string.charAt(0) === "i" || string.charAt(0) === "u" || string.charAt(0) === "A" || string.charAt(0) === "E" || string.charAt(0) === "I" || string.charAt(0) === "O " || string.charAt(0) === "U"){
        return `${string}way`
    }
    else if(string.charAt(0) != "a" && string.charAt(0) != "e" && string.charAt(0) != "i" && string.charAt(0) != "o" && string.charAt(0) != "u" && string.charAt(0) != "A" && string.charAt(0) != "E" && string.charAt(0) != "I" && string.charAt(0) != "O " && string.charAt(0) != "U" && string.includes("qu")){

        if (string.startsWith("qu") || string.startsWith("Qu")|| string.startsWith("qU") || string.startsWith("QU")){
            return string.slice(2, string.length) + 'quay'
            }else{
                return string.slice(string.search("qu")+2, string.length) + `${string.slice(0, string.search("qu")+2)}ay`
            }
    } else if (string.charAt(0) != "a" && string.charAt(0) != "e" && string.charAt(0) != "i" && string.charAt(0) != "u" && string.charAt(0) != "A" && string.charAt(0) != "E" && string.charAt(0) != "I" && string.charAt(0) != "O " && string.charAt(0) != "U"){
        for (let i=0; i < string.length; i++){
            if (string.charAt(i) != "a" && string.charAt(i) != "e" && string.charAt(i) != "i" && string.charAt(i) != "u" && string.charAt(i) != "o" && string.charAt(i) != "A" && string.charAt(i) != "E" && string.charAt(i) != "I" && string.charAt(i) != "O" && string.charAt(i) != "U"){
            } else {
                let pigword = string.slice(0 , i)
                return string.slice(i, string.length) + pigword + 'ay'
            }
        }
    }return "parametes not met"
}
        //
//end Og code
// const quCheck = (string)=> {
//     if(string.charAt(0) != !/aeiou/i && string.includes("qu")){
//         if(string.startsWith(!/qu/i)){
//             return string.slice(2, string.length) + 'quay'
//         }else{
//             return string.slice(string.search("qu")+2, string.length) + `${string.slice(0, string.search("qu")+2)}ay`
//         }
//     }else if{
//         return "parameters not met"
//     }
// }
