import pandas as pd 
data=pd.read_csv('./Datasets/Updated_data.csv')
print (data.head())
print (data.CROP.unique())