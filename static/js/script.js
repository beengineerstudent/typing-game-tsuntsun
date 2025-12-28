// window.alert('危険だあああああ！')
// const numbers = [2, 4, 5, 10, 12, 15, 20, 22];

// function sumEvens(numbers){
    
//     let sum = 0;
    
//     for(let i =0 ;i < numbers.length ;i++){
        
//         if(numbers[i] % 2 == 0 && numbers[i] % 5 !== 0){
            
//             sum += numbers[i]
//         }
    
//     }
//     return sum
// }
// console.log(sumEvens(numbers))//ここで数字が表示されるようにしよう！

const button = document.getElementById('btn')
console.log(button)
const header = document.querySelector('.heading')
console.log(header)

const sample = document.querySelector('.list1')

const text = document.createElement('p')
header.appendChild(text)

text.textContent = 'つんでごわす'

sample.classList.add('first')

button.addEventListener('click',()=>{
    sample.classList.remove('list1')
    header.style.fontSize = '100px';
})

