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


# Mean Cases
@app.get("/mean/know_dev_stand/")
def read_mean_know_dev_stand(
    mean_sample: float, mean_population: float, dev_stand: float, n: int, ns: float
):
    return mean_know_dev_stand(mean_sample, mean_population, dev_stand, n, ns)


@app.get("/mean/unknown_dev_stand_t/")
def read_mean_unknown_dev_stand_t(
    mean_sample: float,
    mean_population: float,
    sample_dev_stand: float,
    n: int,
    ns: float,
):
    return mean_unknown_dev_stand_t(
        mean_sample, mean_population, sample_dev_stand, n, ns
    )
