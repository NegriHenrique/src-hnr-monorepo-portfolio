# Dockerfile para produção do backend FastAPI
FROM python:3.10-slim
WORKDIR /app
COPY . .
RUN pip install --upgrade pip && pip install fastapi uvicorn rembg
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
