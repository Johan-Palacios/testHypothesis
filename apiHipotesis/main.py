from fastapi import FastAPI
from proportion_cases import *
from mean_cases import *
from dev_stand_cases import *
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


# Proportion
@app.get("/proportion/proportion_bernoulli_n/")
def read_proportion_bernoulli_n(
    proportion_population: float, proportion_sample: float, ns: float, n: float
):
    return proportion_bernoulli_n(proportion_population, proportion_sample, ns, n)

# Dev Stand
@app.get("/dev_stand/dev_stand_chi/")
def read_dev_stand_chi(
    dev_stand_population: float, dev_stand_sample: float, ns: float, n: float
):
    return dev_stand_chi(dev_stand_population, dev_stand_sample, ns, n)
