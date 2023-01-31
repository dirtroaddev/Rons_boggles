let btn = document.getElementById('submit_btn');
let word = document.getElementById('word');
let right_wrong = document.getElementById('right_or_wrong');
let disScore = document.getElementById('display_score');

btn.addEventListener('click',async (e) => {
    e.preventDefault()
    try {
        const response = await axios.post('/game', { word: word.value });
        
        console.log(response.data.val_word )
            if(response.data.val_word == 'ok') {
                right_wrong.innerHTML = '<h2 class="bg-primary">Great Guess = You Get A Point</h2>';
            } else if (response.data.val_word == 'not-word') {
                right_wrong.innerHTML = '<h2 class="bg-warning">Sorry Word is not Real = You Do Not Get A Point</h2>';
            }else if(response.data.val_word == 'not-on-board') {
                right_wrong.innerHTML = '<h2 class="bg-warning">Sorry Word is not On the Board = You Do Not Get A Point</h2>';
            }

        disScore.innerHTML = ` <h2>${response.data.score}</h2>`;


        
        
    } catch (error) {
        console.error(error);
    }




  
})


