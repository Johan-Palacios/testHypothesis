FROM python:3.9.5 as build

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

RUN mkdir -p /home/app/backend

WORKDIR /home/app/backend

COPY . .

EXPOSE 80

CMD ["uvicorn", "main:app","--proxy-headers", "--host", "0.0.0.0", "--port", "80", "--workers", "4"]
