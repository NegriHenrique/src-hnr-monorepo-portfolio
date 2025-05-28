from fastapi import FastAPI, UploadFile, File
from fastapi.responses import StreamingResponse, JSONResponse
from rembg import remove
from io import BytesIO

app = FastAPI()

@app.get("/health")
def health():
    return {"status": "ok"}

@app.post("/remove-background")
async def remove_background(file: UploadFile = File(...)):
    try:
        input_bytes = await file.read()
        output_bytes = remove(input_bytes)
        return StreamingResponse(BytesIO(output_bytes), media_type="image/png")
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})
