from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import json
import os

app = Flask(__name__)
CORS(app)

openai.api_key ='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'
resp = "Type Here"

@app.route('/', methods=['POST', 'GET'])
def hello():
    global resp
    data = request.data
    print(data)

    if data != bytearray([]):
         data = json.loads(data.decode('utf-8'))
         #print(repr(data))
         resp = gen_response(data['body'])
         #print(resp)
    print(jsonify([{'resp': resp}]))
    return jsonify([{'resp': resp}])


def gen_response(question):
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=question,
        temperature=0.3,
        max_tokens=64,
        top_p=1,
        frequency_penalty=0.5,
        presence_penalty=0
    )
    return (response['choices'][0]['text'])
