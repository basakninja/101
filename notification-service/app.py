from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/notify', methods=['POST'])
def notify():
    data = request.get_json()
    email = data.get('email')
    order_id = data.get('orderId')
    print(f"Email sent to {email} for order {order_id}")
    return jsonify({'status': 'sent'})

if __name__ == '__main__':
    app.run(port=5000)
