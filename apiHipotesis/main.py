from fastapi import FastAPI
from proportion_cases import *
from mean_cases import *
from dev_stand_cases import *
from fastapi.middleware.cors import CORSMiddleware
from fastapi import Request


description = """
This is a fancy API built with /Esta es una API construida con [FastAPI🚀](https://fastapi.tiangolo.com/)

📝 [Source Code/Código Fuente](https://github.com/Johan-Palacios/testHypothesis/tree/master/apiHipotesis)
🐞 [Issues/Problemas](https://github.com/Johan-Palacios/testHypothesis/issues)
"""

app = FastAPI(
    title="Proof of Hypothesis/Prueba De Hipótesis API",
    description=description,
    version="1.0.0",
    docs_url="/",
    root_path="",
)

origins = [
    "*"
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


@app.get("/mean/know_dev_stand/graph/")
def read_mean_know_dev_stand_graph(
    criticPoint: float, observedValue: float, analisisType: int
):
    return mean_know_dev_stand_graph(criticPoint, observedValue, analisisType)


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


@app.get("/mean/unknown_dev_stand_t/graph/")
def read_mean_unknown_dev_stand_t_graph(
    criticPoint: float, observedValue: float, analisisType: int, n: int
):
    return mean_unknown_dev_stand_t_graph(criticPoint, observedValue, analisisType, n)


# Proportion
@app.get("/proportion/proportion_bernoulli_n/")
def read_proportion_bernoulli_n(
    proportion_population: float, proportion_sample: float, ns: float, n: float
):
    return proportion_bernoulli_n(proportion_population, proportion_sample, ns, n)


@app.get("/proportion/proportion_bernoulli_n/graph/")
def read_proportion_bernoulli_n_graph(
    criticPoint: float, observedValue: float, analisisType: int
):
    return mean_know_dev_stand_graph(criticPoint, observedValue, analisisType)


# Dev Stand
@app.get("/dev_stand/dev_stand_chi/")
def read_dev_stand_chi(
    dev_stand_population: float, dev_stand_sample: float, ns: float, n: float
):
    return dev_stand_chi(dev_stand_population, dev_stand_sample, ns, n)


@app.get("/dev_stand/dev_stand_chi/graph/")
def read_dev_stand_chi_graph(
    criticPoint: float, observedValue: float, analisisType: int, n: int
):
    return dev_stand_chi_graph(criticPoint, observedValue, analisisType, n)


@app.get("/mean/doble_mean_variance_no_equal/")
def read_double_mean_variance_no_equal(
    mean_1: float,
    mean_2: float,
    dev_stand_1: float,
    dev_stand_2: float,
    n: int,
    n_2: int,
    ns: float,
):
    return double_mean_variance_no_equal(
        mean_1, mean_2, dev_stand_1, dev_stand_2, n, n_2, ns
    )


@app.get("/mean/doble_mean_variance_no_equal/graph/")
def read_mean_variance_no_equal(
    criticPoint: float, observedValue: float, analisisType: int
):
    return double_mean_variance_no_equal_graph(criticPoint, observedValue, analisisType)
