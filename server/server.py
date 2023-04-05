from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import json
import os

app = Flask(__name__)
CORS(app)

openai.api_key =''
resp = "Type Here"

@app.route('/', methods=['POST', 'GET'])
def hello():
    global resp
    data = request.data

    if data != bytearray([]):
         data = json.loads(data.decode('utf-8'))
         resp = 'Hi, how are you?'
    return jsonify([{'resp': resp}])


def gen_response(question):
    response = openai.Completion.create(
        engine="gpt-3.5-turbo",
        prompt=question,
        temperature=0.3,
        max_tokens=64,
        top_p=1,
        frequency_penalty=0.5,
        presence_penalty=0
    )
    return (response['choices'][0]['text'])
