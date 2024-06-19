FROM python:3.9.5

RUN mkdir -p /home/app/backend

WORKDIR /home/app/backend

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8000

CMD ["uvicorn", "main:app", "--proxy-headers", "--host", "0.0.0.0", "--port", "8000", "--reload"]
