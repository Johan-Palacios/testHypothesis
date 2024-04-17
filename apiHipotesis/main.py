from fastapi import FastAPI
from mean_cases import *
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "World"}


# Mean Cases
@app.get("/mean/know_dev_estand/")
def read_mean_know_dev_estand(mean_sample: float, mean_population: float, dev_stand: float, n: int, ns: float):
    return mean_know_dev_estand(mean_sample, mean_population, dev_stand, n, ns)
