from boggle import Boggle
from flask import Flask, render_template, request, redirect, jsonify


app = Flask(__name__)

boggle_game = Boggle()

board = boggle_game.make_board()


@app.route('/')
def homepage():
    return render_template('index.html')



@app.route('/game', methods=['GET', 'POST'])
def game():
    global board
    score = 0
    if request.method == 'GET':
        board = boggle_game.make_board()
    if request.method == 'POST':
        word = request.get_json().get('word')
        # Do something with the word
        val_word = boggle_game.check_valid_word(board, word)
        if val_word == 'ok':
            score += 1
        
        print(score)
        return jsonify({'val_word': val_word, 'score': score})
    else:
        return render_template('game.html', board=board)




