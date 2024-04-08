import pandas as pd
import main
form_data = {
    'humidity': "1",
    'nitrogen_level': "1",
    'ph': "1",
    'phosphorus_level': "1",
    'potassium_level': "1",
    'rainfall': "1",
    'state': "Assam",
    'temperature': "1"
}
obj = main.Predict()
guide = main.Guide()
explain = main.Explain()
test_df = obj.transform(form_data)
pred1,percentage = obj.predict(test_df)
print ( pred1)
print()
# print (guide.intruct(pred1))
print (explain.shap(test_df))