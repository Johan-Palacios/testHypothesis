from scipy.stats import norm, t
from math import sqrt


def mean_know_dev_estand(mean_sample: float, mean_population: float, dev_estand: float, n: float, ns: float):
    z = float(norm.ppf(ns))
    est_p:float = float (mean_sample - mean_population) / (dev_estand / float(sqrt(n)))
    return {"criticPoint": z, "observedValue": est_p}

def mean_unknown_dev_stand_t(mean_sample: float, mean_population: float, sample_dev_estand: float, n: float, ns: float):
    z = float(t.ppf(ns, n-1))
    est_p:float = float (mean_sample - mean_population) / (sample_dev_estand / float(sqrt(n)))
    return {"criticPoint": z, "observedValue": est_p}
