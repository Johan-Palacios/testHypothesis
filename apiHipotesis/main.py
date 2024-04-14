from fastapi import FastAPI
from mean_cases import *

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


# Mean Cases
@app.get("/mean/know_dev_estand/")
def read_mean_know_dev_estand(mean_sample: float, mean_population: float, dev_stand: float, n: int, nc: float):
    return mean_know_dev_estand(mean_sample, mean_population, dev_stand, n, nc)
