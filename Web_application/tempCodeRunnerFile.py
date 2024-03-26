@app.route('/predict', methods=['POST'])
# def output():

#     #write code to take inputs from the form
#     #write code to encode those inputs 
#     #convert them to dataframe

#     #df this is dataframe created using input variables
#     crop=rndfrst.predict(df)

#     def to_markdown(text):
#         text = text.replace('•', '  *')
#         return Markdown(textwrap.indent(text, '> ', predicate=lambda _: True))
    
#     genai.configure(api_key='AIzaSyAz3pBfQPp0ZHecfxJRDsSrjo33nfE2O20')
#     model=genai.GenerativeModel('gemini-1.0-pro-latest')

#     prompt=f"can u give me very clear-cut guidelines on how to grow {crop} most cost-effectively? Make sure guidelines are detailed and enough for any farmer to follow along without any doubts. Make sure the guidelines you provide are for the Indian climate and in accordance with Indian practice. Do not give me any sort of background. Directly start-off by how to grow. let every step be detailed and in every step also highlight what problems a farmer may come across and provide the steps for that as well. Use simple english"
    
#     response=model.generate_content(prompt)
    
#     text=to_markdown(response.text)

#     return render_template('output.html', label=response, crop=crop, guid=text)
