from flask import Flask, render_template,request
import pickle 
import pathlib
import textwrap
import google.generativeai as genai
import pandas as pd
from IPython.display import display
from IPython.display import Markdown




# Write code to take input and frame the input from 7 fields to the input size.

app=Flask(__name__)

genai.configure(api_key='AIzaSyAz3pBfQPp0ZHecfxJRDsSrjo33nfE2O20')
model=genai.GenerativeModel('gemini-1.0-pro-latest')

rndfrst=pickle.load(open('RNDFRST.pkl', 'rb'))

def to_markdown(text):
        text = text.replace('•', '  *')
        return Markdown(textwrap.indent(text, '> ', predicate=lambda _: True))



@app.route('/')
def home():
    return render_template('index.html')


@app.route('/form', methods=['POST']) #form page
def form():
    return render_template('form.html')



@app.route('/predict', methods=['POST']) #predict page (form->predict)



def output():
    

    n=request.form['nitrogen']
    p=request.form['phosphorus']
    k=request.form['potassium']
    h=request.form['humidity']
    ph=request.form['pH']
    r=request.form['rainfall']
    s=request.form['state']

    
    #write code to encode those inputs (take the code from model building) 

    #dataf this is dataframe created using input variables



    crop=rndfrst.predict(dataf)
    
    

    prompt=f"can u give me very clear-cut guidelines on how to grow {crop} most cost-effectively? Make sure guidelines are detailed and enough for any farmer to follow along without any doubts. Make sure the guidelines you provide are for the Indian climate and in accordance with Indian practice. Do not give me any sort of background. Directly start-off by how to grow. let every step be detailed and in every step also highlight what problems a farmer may come across and provide the steps for that as well. Use simple english"
    
    response=model.generate_content(prompt)
    
    text=to_markdown(response.text)

    return render_template('output.html', label=response, crop=crop, guid=text)



@app.route('/queries', methods=['POST','GET']) #For redirecting to query page (Home->query, output->query)

def query():
     
    if request.method=="GET":
         render_template('chatpage.html')
    else:
         question=request.form["message"]
         answer=model.generate_content(question)
         answer=to_markdown(answer)
         return render_template("chatpage.html", question=question,response=answer)
    

@app.route('/feedback', methods=['GET', 'POST'])
def feedback():
     
     """display form in feedback portal when flag==0
        else 
        display Thankyou for submitting the feedback
     """

     if request.method=='GET':
            flag=0
            render_template('feedback.html', flag=flag)
     else:
            subject=request.form['subject']
            body=request.form['body']
            flag=1
            return render_template('feedback.html', flag=flag)
     

     
     
     

if __name__== '__main__':
    app.run(debug=True)