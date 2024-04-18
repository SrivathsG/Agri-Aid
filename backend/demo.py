import pandas as pd 
import main as m

data=pd.read_csv('backend/Datasets/Encoded_data.csv')
# print (data.head())
# print (data.CROP.unique())
# crop='papaya'
# obj=m.Guide()
# text=obj.intruct(crop)
# print(text)
n=50
p=75
k=50
t=45
h=100
ph=10
r=170
s="Andhra Pradesh"
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

# dataf
obj1=m.Explain()
text=obj1.contribution(dataf)
print(text)
