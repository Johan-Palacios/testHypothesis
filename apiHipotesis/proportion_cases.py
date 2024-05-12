from scipy.stats import norm
from math import sqrt


def proportion_bernoulli_n(proportion_population: float, proportion_sample: float, ns:float, n:float):
    z = abs(float(norm.ppf(ns)))
    est_p = (proportion_sample - proportion_population)/(sqrt((proportion_population *(1 - proportion_population))/n))
    return {"criticPoint": z, "observedValue": est_p}


