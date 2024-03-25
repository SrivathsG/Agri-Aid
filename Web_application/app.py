from flask import Flask, render_template
import pickle 


rndfrst=pickle.load(open('RNDFRST.pkl', 'rb'))


# Write code to take input and frame the input from 7 fields to the input size.

app=Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

if __name__== '__main__':
    app.run(debug=True)