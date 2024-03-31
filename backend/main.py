import pickle
import pandas as pd
import pathlib
import textwrap
import google.generativeai as genai

from IPython.display import display
from IPython.display import Markdown
# model=pickle.load(open('RNDFRST.pkl','rb'))

model=pickle.load(open('./RNDFRST.pkl','rb'))

class Predict:
    def __init__(self) :
        self.model=pickle.load(open('RNDFRST.pkl','rb'))
    

    def transform(self,x):
        n=x['nitrogen_level']
        p=x['phosphorus_level']
        k=x['potassium_level']
        t=x['temperature']
        h=x['humidity']
        ph=x['ph']
        r=x['rainfall']
        s=x['state']

        data=pd.read_csv('./Datasets/Encoded_data.csv')
        columns=data.columns.to_list()
        columns=columns[7:]
        dataf={'N_SOIL':n,
            'P_SOIL':p,
            'K_SOIL':k,
            'TEMPERATURE':t,
            'HUMIDITY':h,
            'ph':ph,
            'RAINFALL': r}
        dataf=pd.DataFrame(dataf, index=['new_data'])

        for c in columns:
            if(c==f"STATE_{s}"):
                dataf[c]=1.0
            else:
                dataf[c]=0.0
        return dataf
    
    def predict(self,x):
        resp=self.model.predict(x)
        prob=self.model.predict_proba(x)
        probab=prob[0]
        indices=probab.argsort()[::-1][:1]

        percentage=probab[indices[0]]

        return resp[0],percentage
    

class Guide:
    
    def __init__(self):
        genai.configure(api_key='AIzaSyAz3pBfQPp0ZHecfxJRDsSrjo33nfE2O20')
        self.model2=genai.GenerativeModel('gemini-1.0-pro-latest')

    def to_markdown(self,text):
        self.text = text.replace('•', '  *')
        return Markdown(textwrap.indent(text, '> ', predicate=lambda _: True))
    
    
    def intruct(self,crop):
        prompt=f"can u give me very clear-cut guidelines on how to grow {crop} most cost-effectively? Make sure guidelines are detailed and enough for any farmer to follow along without any doubts. Make sure the guidelines you provide are for the Indian climate and in accordance with Indian practice. Do not give me any sort of background. Directly start-off by how to grow. let every step be detailed and in every step also highlight what problems a farmer may come across and provide the steps for that as well. Use simple english"
    
        response=self.model2.generate_content(prompt)
    
        text= self.to_markdown(response.text)

        return text
    
    

        





        
        

        
        
        