from scipy.stats import chi2

from utils.graph import graph_chi2


def dev_stand_chi(
    dev_stand_population: float, dev_stand_sample: float, ns: float, n: float
):
    z = abs(float(chi2.isf(ns, n - 1)))
    est_p = (dev_stand_sample * (n - 1)) / dev_stand_population
    return {"criticPoint": z, "observedValue": est_p}


def dev_stand_chi_graph(
    criticPoint: float, observedValue: float, analisisType: int, n: int
):
    image = graph_chi2(criticPoint, observedValue, analisisType, n)
    return {"graph": image}
