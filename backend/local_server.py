from flask import Flask, request, jsonify, send_file
import os
import subprocess
from werkzeug.utils import secure_filename

app = Flask(__name__)
UPLOAD_FOLDER = 'uploads'
OUTPUT_FOLDER = 'outputs'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(OUTPUT_FOLDER, exist_ok=True)

@app.route('/convert', methods=['POST'])
def convert():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400

    if file and file.filename.endswith('.pdf'):
        filename = secure_filename(file.filename)
        input_path = os.path.join(UPLOAD_FOLDER, filename)
        output_filename = os.path.splitext(filename)[0] + '.md'
        output_path = os.path.join(OUTPUT_FOLDER, output_filename)

        file.save(input_path)

        try:
            subprocess.run(['pandoc', input_path, '-o', output_path], check=True)
            return send_file(output_path, as_attachment=True)
        except subprocess.CalledProcessError as e:
            return jsonify({'error': f'Conversion failed: {str(e)}'}), 500
    else:
        return jsonify({'error': 'File must be a PDF'}), 400

if __name__ == '__main__':
    app.run(port=5000)