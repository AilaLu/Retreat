# Use the official Python image as a base
FROM python:3.10-slim

# Set the working directory inside the container
WORKDIR /app

# Copy requirements and install dependencies
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt
#requirements.txt

# Copy the rest of the application files
COPY . .

# Expose the Flask port
EXPOSE 5000

# Set environment variables
ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0
ENV FLASK_ENV=production

# Run the Flask server
CMD ["flask", "run"]
