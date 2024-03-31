import pickle
import pandas as pd
class Predict:
    def __init__(self) :
        self.model=pickle.load(open('RNDFRST.pkl','rb'))
    

    def transform(self,x):
        n=x['nitrogen_level']
        p=x['phosphorous_level']
        k=x['potassium_level']
        t=x['temperature']
        h=x['humidity']
        ph=x['ph']
        r=x['rainfall']
        s=x['state']

        data=pd.read_csv('Encoded_data.csv')
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
        return resp[0]





        
        

        
        
        