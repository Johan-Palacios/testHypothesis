from scipy.stats import norm, t
import numpy as np
import matplotlib.pyplot as plt
import base64
from io import BytesIO
from math import sqrt


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


def mean_know_dev_stand_graph(criticPoint: float, observedValue: float):
    x = np.linspace(-5, 5, 1000)
    y = norm.pdf(x, loc=0, scale=1)  # Media = 0, Desviación estándar = 1

    plt.plot(x, y, color="blue")
    plt.title("Distribución Normal")
    plt.xlabel("x")
    plt.ylabel("Densidad de probabilidad")

    buffer = BytesIO()
    plt.savefig(buffer, format="png")
    buffer.seek(0)
    image_base64 = base64.b64encode(buffer.getvalue()).decode("utf-8")

    plt.close()

    return {"graph": image_base64}


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
