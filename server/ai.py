import os
import openai

openai.api_key ='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'

response = openai.Completion.create(
engine="text-davinci-003",
prompt="Write a poem about pizza",
temperature=0.3,
max_tokens=64,
top_p=1,
frequency_penalty=0.5,
presence_penalty=0)
print(response['choices'][0]['text'])

