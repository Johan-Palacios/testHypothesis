from scipy.stats import norm, t
from math import sqrt
from utils.graph import graph_normal, graph_t_student


def mean_know_dev_stand(
    mean_sample: float,
    mean_population: float,
    dev_stand: float,
    n: float,
    ns: float,
):
    z = abs(float(norm.ppf(ns)))
    est_p: float = float(mean_sample - mean_population) / (dev_stand / float(sqrt(n)))

    return {"criticPoint": z, "observedValue": est_p}


def mean_know_dev_stand_graph(
    criticPoint: float, observedValue: float, analisisType: int
):
    image = graph_normal(criticPoint, observedValue, analisisType)

    return {"graph": image}


def mean_unknown_dev_stand_t_graph(
    criticPoint: float, observedValue: float, analisisType: int, n: int
):
    image = graph_t_student(criticPoint, observedValue, analisisType, n)
    return {"graph": image}


def mean_unknown_dev_stand_t(
    mean_sample: float,
    mean_population: float,
    sample_dev_stand: float,
    n: float,
    ns: float,
):
    z = abs(float(t.ppf(ns, n - 1)))
    est_p: float = float(mean_sample - mean_population) / (
        sample_dev_stand / float(sqrt(n))
    )

    return {"criticPoint": z, "observedValue": est_p}
