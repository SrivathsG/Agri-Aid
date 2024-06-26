from flask import Flask, jsonify,request
from flask_cors import CORS
import time
import main
# print("The model recieved from main is " ,main.model)


app = Flask(__name__)
CORS(app, origins=["http://127.0.0.1:5173","http://localhost:5173"])  # Allow requests from your React frontend origin
@app.route('/')
def hello():
    return {"Message": "This is the backend server to AgroUs"}

@app.route('/get_data', methods=['POST'])
def get_data():
    if request.method == 'POST':  # Use 'request' object within the function scope
        form_data = request.json # Access JSON data from request
        nitrogen_level = form_data['nitrogen_level']
        phosphorus_level = form_data['phosphorus_level']
        potassium_level = form_data['potassium_level']
        temperature = form_data['temperature']
        humidity = form_data['humidity']
        ph = form_data['ph']
        rainfall = form_data['rainfall']
        state = form_data['state']
        response_data = {  # Example response data
            'message': 'Data received successfully!',
            "data":{
            'nitrogen_level': nitrogen_level,
            'phosphorus_level': phosphorus_level,
            'potassium_level': potassium_level,
            'temperature': temperature,
            'humidity':humidity,
            'ph':ph,
            'rainfall': rainfall,
            'state' : state
            }
            # Add other relevant data based on your processing
        }
        obj = main.Predict()
        guide = main.Guide()
        explain = main.Explain()
        test_df = obj.transform(form_data)
        pred1,percentage = obj.predict(test_df)
        instruction =guide.intruct(pred1)
        explaination = explain.contribution(test_df)
        res = {
            "Success": True,
            "Crop": pred1,
            "Message" : f' is the most suitable crop for growing in your soil with {percentage}% compatibility.',
            "Explanation" : explaination,
            "Instruction": instruction
        }
        # time.sleep(0.5)
        return jsonify(res)
        # return jsonify(response_data)  # Return JSON response
    else:
        return jsonify({'error': 'Invalid request method'}), 405  # Handle non-POST requests

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)

