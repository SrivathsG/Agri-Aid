from flask import Flask, render_template
import pickle 
import pathlib
import textwrap
import google.generativeai as genai

from IPython.display import display
from IPython.display import Markdown



rndfrst=pickle.load(open('RNDFRST.pkl', 'rb'))


# Write code to take input and frame the input from 7 fields to the input size.

app=Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict')
def output():

    #write code to take inputs from the form
    #write code to encode those inputs 
    #convert them to dataframe

    #df this is dataframe created using input variables
    crop=rndfrst.predict(df)

    def to_markdown(text):
        text = text.replace('•', '  *')
        return Markdown(textwrap.indent(text, '> ', predicate=lambda _: True))
    
    genai.configure(api_key='AIzaSyAz3pBfQPp0ZHecfxJRDsSrjo33nfE2O20')
    model=genai.GenerativeModel('gemini-1.0-pro-latest')

    prompt=f"can u give me very clear-cut guidelines on how to grow {crop} most cost-effectively? Make sure guidelines are detailed and enough for any farmer to follow along without any doubts. Make sure the guidelines you provide are for the Indian climate and in accordance with Indian practice. Do not give me any sort of background. Directly start-off by how to grow. let every step be detailed and in every step also highlight what problems a farmer may come across and provide the steps for that as well. Use simple english"
    
    response=model.generate_content(prompt)
    
    text=to_markdown(response.text)

    return render_template('output.html', label=response, crop=crop, guid=text)


     

if __name__== '__main__':
    app.run(debug=True)