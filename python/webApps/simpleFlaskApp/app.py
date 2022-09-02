# REST APIs
# Request Method:
  # GET,  Endpoint: www.godev.today/api/v1/testApi , It returns message 'Simple API Test: This is App is working' 
  # GET,  Endpoint: www.godev.today/api/v1/student , It returns list of all the students (JSON)
  # POST                      
  # PATCH
  # DELETE

# localhost = 127.0.0.1
# Port number: 5000 

import json
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/v1/testApi')
def simpleApiTest():
    try:   
        # Introduce some error
        x = y
        return jsonify({'message': 'Simple API Test: This is App is working'})
    except:
        return jsonify ({'Error Message': 'Error Happened'}), 500


# Main driver
if __name__ == '__main__':
    app.run()