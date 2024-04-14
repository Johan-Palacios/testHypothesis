from scipy.stats import norm, t
from math import sqrt


def mean_know_dev_estand(mean_sample: float, mean_population: float, dev_estand: float, n: int, nc: float):
    z = float(norm.ppf(nc))
    est_p = (mean_sample - mean_population) / (dev_estand / sqrt(n))
    return {"criticPoint": z, "observedValue": est_p}


# def mean_unknown_dev_stand():
#     mean_sample = float(input("Ingrese la media muestral ( x╠à) : "))
#     mean_populaton = float(input("Ingrese la media poblacional ( ╬╝ ):  "))
#     dev_est_sample = float(input("Ingrese la desviaci├│n estandar muestral ( s ): "))
#     n = float(input("Ingrese el tama├▒o de la muestra ( n ): "))
#     nc = float(input("Nivel de confianza: "))
#     z = float(t.ppf(nc))
#     est_p = (mean_sample - mean_populaton) / (dev_est_sample / sqrt(n))
#     result = hipotesis_mean_normal(z, est_p, mean_populaton)
#     print(f"El Valor Observado es de {est_p} y el valor critico es de {z}")
#     if result:
#         print("Se acepta la hipotesis Alternativa y se rechaza la hipotesis nula")
#     else:
#         print("Se acepta la hipotesis Nula y se rechaza la hipotesis alternativa")
#     conclusion_gen_mean(result, nc, mean_populaton)
#
#
# def mean_unknown_dist():
#     print(
#         """
#     Estadistico de Prueba
#
#          x╠à - ╬╝
#         ---------
#            s      N Γëê (0,1)
#          -----
#            ΓêÜn
#
#     """
#     )
#
#     mean_sample = float(input("Ingrese la media muestral ( x╠à) : "))
#     mean_populaton = float(input("Ingrese la media poblacional ( ╬╝ ):  "))
#     dev_est_sample = float(input("Ingrese la desviaci├│n estandar muestral ( s ): "))
#     n = float(input("Ingrese el tama├▒o de la muestra ( n ): "))
#     nc = float(input("Nivel de confianza: "))
#     z = float(norm.ppf(nc))
#     est_p = (mean_sample - mean_populaton) / (dev_est_sample / sqrt(n))
#     result = hipotesis_mean_normal(z, est_p, mean_populaton)
#     print(f"El Valor Observado es de {est_p} y el valor critico es de {z}")
#     if result:
#         print("Se acepta la hipotesis Alternativa y se rechaza la hipotesis nula")
#     else:
#         print("Se acepta la hipotesis Nula y se rechaza la hipotesis alternativa")
#     conclusion_gen_mean(result, nc, mean_populaton)
#
