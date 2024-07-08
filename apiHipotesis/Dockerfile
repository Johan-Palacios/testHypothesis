FROM python:3.9.5 as builder

ENV PATH="/app/venv/bin:$PATH"

WORKDIR /app

RUN python -m venv /app/venv

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt && rm -rf ~/.cache/pip


FROM python:3.9.5-slim as release

RUN groupadd -g 999 python && \
    useradd -m -r -u 999 -g python python

RUN apt-get update && \
    apt-get install -y --no-install-recommends libc6 && \
    rm -rf /var/lib/apt/lists/*


RUN chown python:python /home/python

WORKDIR /app

RUN chown python:python /app

ENV PATH="/app/venv/bin:$PATH"

COPY  --chown=python:python . .

COPY --from=builder --chown=python:python /app/venv /app/venv

USER 999

EXPOSE 80

CMD ["uvicorn", "main:app","--proxy-headers", "--host", "0.0.0.0", "--port", "80", "--workers", "4"]
