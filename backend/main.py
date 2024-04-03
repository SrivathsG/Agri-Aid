import pickle
import pandas as pd
import pathlib
import textwrap
import google.generativeai as genai
import shap

from IPython.display import display
from IPython.display import Markdown
from sklearn.inspection import plot_partial_dependence

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

        return resp[0],percentage*100
    

class Guide:
    
    def __init__(self):
        genai.configure(api_key='AIzaSyAz3pBfQPp0ZHecfxJRDsSrjo33nfE2O20')
        self.model2=genai.GenerativeModel('gemini-1.0-pro-latest')

    def to_markdown(self,text):
        """
        This function converts the response to markdown

        Args:
            text: text response from GenAI model

        returns: Markdown text.
        """
        self.text = text.replace('•', '  *')
        return Markdown(textwrap.indent(text, '> ', predicate=lambda _: True))
    
    
    def intruct(self,crop):
        """
        This function returns the guide for crop

        Args:
            crop: Predicted crop from the model

        returns: returns the final response that can be directly used
        """
        prompt=f"can u give me very clear-cut guidelines on how to grow {crop} most cost-effectively? Make sure guidelines are detailed and enough for any farmer to follow along without any doubts. Make sure the guidelines you provide are for the Indian climate and in accordance with Indian practice. Do not give me any sort of background. Directly start-off by how to grow. let every step be detailed and in every step also highlight what problems a farmer may come across and provide the steps for that as well. Use simple english"
    
        response=self.model2.generate_content(prompt)
    
        text= self.to_markdown(response.text)

        return text

    
class Explain:    

    def __init__(self):
        shap.initjs()
        self.model=pickle.load(open('RNDFRST.pkl','rb'))

    def shap(self,x):
        """
        This function provides analysis or explaination on the prediction
        Args:
            Dataframe: Single record of user input in pandas format.
        returns:
            A string of explaination
        """
          #this function will return a string of explaination (x is the encoded df of user input)
        self.model=model

        #For finding the index of the predicted class

        pred=self.model.predict(x)
        k=0                         
        for c in self.model.classes_:
            if(c==pred[0]):
                index=k
        
        #Finding the most contributed features 
                
        explainer=shap.Explainer(self.model)

        shap_values=explainer(x)

        indices=shap_values.argsort()[0,:,index,-1][:4]


        features=[]
        contri=[]
        k=0
        for i in indices:
            features[k]=x.columns.to_list()[i]
            contri[k]=shap_values[0,i,index]
            k=k=1

        prob=self.model.predict_proba(x)
        probab=prob[0]
        indices=probab.argsort()[::-1][:1]

        percentage=probab[indices[0]]

        if(percentage<0.4):
            return f"Our analysis indicates that the provided soil conditions may not exhibit optimal compatibility with any crops. To enhance compatibility and promote successful plant growth, we recommend conditioning the soil before planting.  For detailed suggestions and additional resources, please visit our queries section"
        
        else:
            return f"The features of soil that strongly promote you to grow {pred[0]} are: {features[0]}: {contri[0]}, {features[1]}: {contri[1]}, {features[2]}: {contri[2]}, {features[3]}: {contri[3]}. These values each represent how close your soil conditions are compared to the optimal levels needed to grow {pred[0]} with a healthy yield "

        #Make an automation script to retrieve the pdp and save them with corresponding names of predictions.
     
        

            



    

    
        
    
    

        





        
        

        
        
        