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


def double_mean_variance_no_equal(
    mean_1: float,
    mean_2: float,
    dev_stand_1: float,
    dev_stand_2: float,
    n: int,
    n_2: int,
    ns: float,
):

    z = abs(float(norm.ppf(ns)))
    est_p: float = (mean_1 - mean_2) / sqrt((dev_stand_1 / n) + (dev_stand_2 / n_2))

    return {"criticPoint": z, "observedValue": est_p}


def double_mean_variance_no_equal_graph(
    criticPoint: float, observedValue: float, analisisType: int
):
    image = graph_normal(criticPoint, observedValue, analisisType)

    return {"graph": image}
