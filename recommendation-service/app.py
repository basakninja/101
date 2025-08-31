from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/recommendations')
def recommendations():
    # In a real system, use cart items to compute recommendations
    return jsonify({'items': [3, 4, 5]})

if __name__ == '__main__':
    app.run(port=5002)
