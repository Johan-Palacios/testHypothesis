import numpy as np
import matplotlib.pyplot as plt
import base64
from io import BytesIO
from scipy.stats import chi2, norm, t


def graph_normal(
    critic_point: float,
    observed_value: float,
    analisis_type: int,
):

    if observed_value > 5:
        x_inf_lim = -1 - int(observed_value)
        x_sup_lim = 1 + int(observed_value)
        x = np.linspace(x_inf_lim, x_sup_lim, 1000)
    else:
        x = np.linspace(-5.5, 5.5, 1000)
    y = norm.pdf(x, loc=0, scale=1)

    plt.figure(figsize=(10, 8))
    plt.plot(x, y, color="blue")
    plt.title("Distribución Normal")
    plt.xlabel("x")
    plt.ylabel("Densidad de probabilidad")
    z_value = critic_point

    plt.annotate(
        f"Valor\nObservado = {round(observed_value, 4)}",
        xy=(observed_value, float(norm.pdf(observed_value))),
        xytext=(observed_value, 0.2),
        arrowprops=dict(facecolor="black", arrowstyle="->"),
    )

    if analisis_type == 1:
        z_value *= -1

        plt.annotate(
            f"z = {round(z_value, 4)}",
            xy=(z_value, float(norm.pdf(z_value))),
            xytext=(z_value + 0.6, 0.2),
            arrowprops=dict(facecolor="black", arrowstyle="->"),
        )

        plt.fill_between(x[x >= z_value], y[x >= z_value], color="blue", alpha=0.3)
        plt.fill_between(x[x <= z_value], y[x <= z_value], color="red", alpha=0.3)
        plt.axvline(x=z_value, color="black", linestyle="--")

        # Agregar texto para el área resaltada de la cola derecha
        text_x_right = z_value + 0.30
        text_y_right = norm.pdf(z_value) * 1
        plt.text(
            text_x_right,
            float(text_y_right),
            "Aceptación H₀",
            color="black",
            horizontalalignment="left",
        )

        # Agregar texto para el área resaltada de la cola izquierda
        text_x_left = -2
        text_y_left = norm.pdf(z_value) * 1
        plt.text(
            text_x_left,
            float(text_y_left),
            "Rechazo H₀",
            color="black",
            horizontalalignment="right",
        )
    if analisis_type == 2:
        plt.annotate(
            f"z = {round(z_value, 4)}",
            xy=(z_value, float(norm.pdf(z_value))),
            xytext=(z_value + 0.6, 0.2),
            arrowprops=dict(facecolor="black", arrowstyle="->"),
        )

        plt.fill_between(x[x >= z_value], y[x >= z_value], color="red", alpha=0.3)
        plt.fill_between(x[x <= z_value], y[x <= z_value], color="blue", alpha=0.3)
        plt.axvline(x=z_value, color="black", linestyle="--")

        # Agregar texto para el área resaltada de la cola derecha
        text_x_right = z_value + 0.30
        text_y_right = norm.pdf(z_value) * 1
        plt.text(
            text_x_right,
            float(text_y_right),
            "Rechazo H₀",
            color="black",
            horizontalalignment="left",
        )

        # Agregar texto para el área resaltada de la cola izquierda
        text_x_left = -2
        text_y_left = norm.pdf(z_value) * 1
        plt.text(
            text_x_left,
            float(text_y_left),
            "Aceptación H₀",
            color="black",
            horizontalalignment="right",
        )

    if analisis_type == 3:

        plt.annotate(
            f"z = {round(z_value, 4)}",
            xy=(z_value, float(norm.pdf(z_value))),
            xytext=(z_value + 0.6, 0.2),
            arrowprops=dict(facecolor="black", arrowstyle="->"),
        )

        plt.annotate(
            f"z = {round(-z_value, 4)}",
            xy=(-z_value, float(norm.pdf(-z_value))),
            xytext=(-z_value + 0.6, 0.1),
            arrowprops=dict(facecolor="black", arrowstyle="->"),
        )

        plt.fill_between(x[x >= z_value], y[x >= z_value], color="red", alpha=0.3)
        plt.fill_between(
            x[x <= z_value * -1], y[x <= z_value * -1], color="red", alpha=0.3
        )

        plt.fill_between(
            x,
            y,
            where=(x <= z_value) & (x >= -z_value).tolist(),
            color="blue",
            alpha=0.3,
        )

        plt.axvline(x=-z_value, color="black", linestyle="--")
        plt.axvline(x=z_value, color="black", linestyle="--")

        # Agregar texto para el área resaltada de la cola derecha
        text_x_right = z_value + 0.30
        text_y_right = norm.pdf(z_value) * 1
        plt.text(
            text_x_right,
            float(text_y_right),
            "Rechazo H₀",
            color="black",
            horizontalalignment="left",
        )

        text_x_right = 0
        text_y_right = norm.pdf(0) / 2
        plt.text(
            text_x_right,
            float(text_y_right),
            "Aceptación H₀",
            color="black",
            horizontalalignment="center",
        )

        # Agregar texto para el área resaltada de la cola izquierda
        text_x_left = -2
        text_y_left = norm.pdf(z_value) * 1
        plt.text(
            text_x_left,
            float(text_y_left),
            "Rechazo H₀",
            color="black",
            horizontalalignment="right",
        )

    buffer = BytesIO()
    plt.savefig(buffer, format="png")
    buffer.seek(0)
    image_base64 = base64.b64encode(buffer.getvalue()).decode("utf-8")

    plt.close()
    return image_base64


def graph_t_student(
    critic_point: float, observed_value: float, analisis_type: int, n: int
):

    if observed_value > 5:
        x_inf_lim = -1 - int(observed_value)
        x_sup_lim = 1 + int(observed_value)
        x = np.linspace(x_inf_lim, x_sup_lim, 1000)
    else:
        x = np.linspace(-5.5, 5.5, 1000)
    y = t.pdf(x, n - 1)

    plt.figure(figsize=(8, 6))
    plt.plot(x, y, color="blue")
    plt.title("Distribución T-Student\nn-1 Grados de Libertad")
    plt.xlabel("x")
    plt.ylabel("Densidad de probabilidad")
    z_value = critic_point

    plt.annotate(
        f"Valor\nObservado = {round(observed_value, 4)}",
        xy=(observed_value, float(t.pdf(observed_value, n - 1))),
        xytext=(observed_value, 0.2),
        arrowprops=dict(facecolor="black", arrowstyle="->"),
    )

    if analisis_type == 1:
        z_value *= -1

        plt.annotate(
            f"z = {round(z_value, 4)}",
            xy=(z_value, float(t.pdf(z_value, n - 1))),
            xytext=(z_value + 0.6, 0.2),
            arrowprops=dict(facecolor="black", arrowstyle="->"),
        )

        plt.fill_between(x[x >= z_value], y[x >= z_value], color="blue", alpha=0.3)
        plt.fill_between(x[x <= z_value], y[x <= z_value], color="red", alpha=0.3)
        plt.axvline(x=z_value, color="black", linestyle="--")

        text_x_right = z_value + 0.30
        text_y_right = t.pdf(z_value, n - 1) * 1
        plt.text(
            text_x_right,
            float(text_y_right),
            "Aceptación H₀",
            color="black",
            horizontalalignment="left",
        )

        text_x_left = -2
        text_y_left = t.pdf(z_value, n - 1) * 1
        plt.text(
            text_x_left,
            float(text_y_left),
            "Rechazo H₀",
            color="black",
            horizontalalignment="right",
        )
    if analisis_type == 2:
        plt.annotate(
            f"z = {round(z_value, 4)}",
            xy=(z_value, float(t.pdf(z_value, n - 1))),
            xytext=(z_value + 0.6, 0.2),
            arrowprops=dict(facecolor="black", arrowstyle="->"),
        )

        plt.fill_between(x[x >= z_value], y[x >= z_value], color="red", alpha=0.3)
        plt.fill_between(x[x <= z_value], y[x <= z_value], color="blue", alpha=0.3)
        plt.axvline(x=z_value, color="black", linestyle="--")

        text_x_right = z_value + 0.30
        text_y_right = t.pdf(z_value, n - 1) * 1
        plt.text(
            text_x_right,
            float(text_y_right),
            "Rechazo H₀",
            color="black",
            horizontalalignment="left",
        )

        text_x_left = -2
        text_y_left = t.pdf(z_value, n - 1) * 1
        plt.text(
            text_x_left,
            float(text_y_left),
            "Aceptación H₀",
            color="black",
            horizontalalignment="right",
        )

    if analisis_type == 3:

        plt.annotate(
            f"z = {round(z_value, 4)}",
            xy=(z_value, float(t.pdf(z_value, n - 1))),
            xytext=(z_value + 0.6, 0.2),
            arrowprops=dict(facecolor="black", arrowstyle="->"),
        )

        plt.annotate(
            f"z = {round(-z_value, 4)}",
            xy=(z_value * -1, float(t.pdf(z_value, n - 1))),
            xytext=(z_value * -1 + 0.6, 0.1),
            arrowprops=dict(facecolor="black", arrowstyle="->"),
        )

        plt.fill_between(x[x >= z_value], y[x >= z_value], color="red", alpha=0.3)
        plt.fill_between(
            x[x <= z_value * -1], y[x <= z_value * -1], color="red", alpha=0.3
        )

        plt.fill_between(
            x,
            y,
            where=(x <= z_value) & (x >= -z_value).tolist(),
            color="blue",
            alpha=0.3,
        )

        plt.axvline(x=-z_value, color="black", linestyle="--")
        plt.axvline(x=z_value, color="black", linestyle="--")

        text_x_right = z_value + 0.30
        text_y_right = t.pdf(z_value, n - 1) * 1
        plt.text(
            text_x_right,
            float(text_y_right),
            "Rechazo H₀",
            color="black",
            horizontalalignment="left",
        )

        text_x_right = 0
        text_y_right = t.pdf(0, n - 1) / 2
        plt.text(
            text_x_right,
            float(text_y_right),
            "Aceptación H₀",
            color="black",
            horizontalalignment="center",
        )

        text_x_left = -2
        text_y_left = t.pdf(z_value, n - 1) * 1
        plt.text(
            text_x_left,
            float(text_y_left),
            "Rechazo H₀",
            color="black",
            horizontalalignment="right",
        )

    buffer = BytesIO()
    plt.savefig(buffer, format="png")
    buffer.seek(0)
    image_base64 = base64.b64encode(buffer.getvalue()).decode("utf-8")

    plt.close()
    return image_base64


def graph_chi2(critic_point: float, observed_value: float, analisis_type: int, n: int):

    z_value = critic_point

    if observed_value > critic_point:
        x = np.linspace(0, observed_value + observed_value * 0.25, 1000)
    else:
        x = np.linspace(0, z_value + z_value * 0.25, 1000)
    y = chi2.pdf(x, n - 1)

    plt.figure(figsize=(10, 8))
    plt.plot(x, y, color="black")
    plt.title("Distribución Chi2\nn-1 Grados de Libertad")
    plt.xlabel("x")
    plt.ylabel("Densidad de probabilidad")
    plt.plot(x, y, color="black")

    plt.annotate(
        f"Valor\nObservado = {round(observed_value, 4)}",
        xy=(observed_value, float(chi2.pdf(observed_value, n - 1))),
        xytext=(observed_value - observed_value * 0.15, 0.02),
        arrowprops=dict(facecolor="black", arrowstyle="->"),
    )

    if analisis_type == 1:
        z_value *= 1

        plt.annotate(
            f"z = {round(z_value, 4)}",
            xy=(z_value, float(chi2.pdf(z_value, n - 1))),
            xytext=(z_value + 0.6, 0.06),
            arrowprops=dict(facecolor="black", arrowstyle="->"),
        )

        plt.fill_between(x[x >= z_value], y[x >= z_value], color="blue", alpha=0.3)
        plt.fill_between(x[x <= z_value], y[x <= z_value], color="red", alpha=0.3)
        plt.axvline(x=z_value, color="black", linestyle="--")

        text_x_right = z_value + z_value * 0.25
        text_y_right = chi2.pdf(z_value, n - 1) + 0.05
        plt.text(
            text_x_right,
            float(text_y_right),
            "Aceptación H₀",
            color="black",
            horizontalalignment="left",
        )

        text_x_left = z_value - z_value * 0.25
        text_y_left = chi2.pdf(z_value, n - 1) + 0.005
        plt.text(
            text_x_left,
            float(text_y_left),
            "Rechazo H₀",
            color="black",
            horizontalalignment="right",
        )
    if analisis_type == 2:
        plt.annotate(
            f"z = {round(z_value, 4)}",
            xy=(z_value, float(chi2.pdf(z_value, n - 1))),
            xytext=(z_value + 0.6, 0.08),
            arrowprops=dict(facecolor="black", arrowstyle="->"),
        )

        plt.fill_between(x[x >= z_value], y[x >= z_value], color="red", alpha=0.3)
        plt.fill_between(x[x <= z_value], y[x <= z_value], color="blue", alpha=0.3)
        plt.axvline(x=z_value, color="black", linestyle="--")

        text_x_right = z_value + z_value * 0.25
        text_y_right = chi2.pdf(z_value, n - 1) * 1
        plt.text(
            text_x_right,
            float(text_y_right),
            "Rechazo H₀",
            color="black",
            horizontalalignment="left",
        )

        text_x_left = z_value - z_value * 0.25
        text_y_left = chi2.pdf(z_value, n - 1)
        plt.text(
            text_x_left,
            float(text_y_left),
            "Aceptación H₀",
            color="black",
            horizontalalignment="right",
        )

    if analisis_type == 3:

        plt.annotate(
            f"z = {round(z_value, 4)}",
            xy=(z_value, float(chi2.pdf(z_value, n - 1))),
            xytext=(z_value + 0.6, 0.04),
            arrowprops=dict(facecolor="black", arrowstyle="->"),
        )

        plt.fill_between(x[x >= z_value], y[x >= z_value], color="red", alpha=0.3)
        plt.fill_between(
            x[x <= z_value * -1], y[x <= z_value * -1], color="red", alpha=0.3
        )

        plt.fill_between(
            x,
            y,
            where=(x <= z_value) & (x >= -z_value).tolist(),
            color="blue",
            alpha=0.3,
        )

        plt.axvline(x=z_value, color="black", linestyle="--")

        text_x_right = z_value + z_value * 0.25
        text_y_right = chi2.pdf(z_value, n - 1) * 1
        plt.text(
            text_x_right,
            float(text_y_right),
            "Rechazo H₀",
            color="black",
            horizontalalignment="left",
        )

        text_x_left = z_value - z_value * 0.25
        text_y_left = chi2.pdf(z_value, n - 1)
        plt.text(
            text_x_left,
            float(text_y_left),
            "Aceptación H₀",
            color="black",
            horizontalalignment="right",
        )

    buffer = BytesIO()
    plt.savefig(buffer, format="png")
    buffer.seek(0)
    image_base64 = base64.b64encode(buffer.getvalue()).decode("utf-8")

    plt.close()
    return image_base64
