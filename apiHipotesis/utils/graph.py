import numpy as np
import matplotlib.pyplot as plt
import base64
from io import BytesIO


def graph(
    distribution,
    critic_point: float,
    observed_value: float,
    analisis_type: int,
    distribution_name: str,
):

    x = np.linspace(-5, 5, 1000)
    y = distribution.pdf(x, loc=0, scale=1)

    plt.plot(x, y, color="blue")
    plt.title(distribution_name)
    plt.xlabel("x")
    plt.ylabel("Densidad de probabilidad")
    z_value = critic_point

    plt.annotate(
        f"z = {round(observed_value, 4)}",
        xy=(observed_value, float(distribution.pdf(observed_value))),
        xytext=(observed_value, 0.2),
        arrowprops=dict(facecolor="black", arrowstyle="->"),
    )

    if analisis_type == 1:
        z_value *= -1

        plt.annotate(
            f"z = {round(z_value, 4)}",
            xy=(z_value, float(distribution.pdf(z_value))),
            xytext=(z_value + 0.6, 0.2),
            arrowprops=dict(facecolor="black", arrowstyle="->"),
        )

        plt.fill_between(x[x >= z_value], y[x >= z_value], color="blue", alpha=0.3)
        plt.fill_between(x[x <= z_value], y[x <= z_value], color="red", alpha=0.3)

        # Agregar texto para el área resaltada de la cola derecha
        text_x_right = z_value + 0.30
        text_y_right = distribution.pdf(z_value) * 1
        plt.text(
            text_x_right,
            float(text_y_right),
            "Aceptación H₀",
            color="black",
            horizontalalignment="left",
        )

        # Agregar texto para el área resaltada de la cola izquierda
        text_x_left = -2
        text_y_left = distribution.pdf(z_value) * 1
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
            xy=(z_value, float(distribution.pdf(z_value))),
            xytext=(z_value + 0.6, 0.2),
            arrowprops=dict(facecolor="black", arrowstyle="->"),
        )

        plt.fill_between(x[x >= z_value], y[x >= z_value], color="red", alpha=0.3)
        plt.fill_between(x[x <= z_value], y[x <= z_value], color="blue", alpha=0.3)

        # Agregar texto para el área resaltada de la cola derecha
        text_x_right = z_value + 0.30
        text_y_right = distribution.pdf(z_value) * 1
        plt.text(
            text_x_right,
            float(text_y_right),
            "Rechazo H₀",
            color="black",
            horizontalalignment="left",
        )

        # Agregar texto para el área resaltada de la cola izquierda
        text_x_left = -2
        text_y_left = distribution.pdf(z_value) * 1
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
            xy=(z_value, float(distribution.pdf(z_value))),
            xytext=(z_value + 0.6, 0.2),
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

        # Agregar texto para el área resaltada de la cola derecha
        text_x_right = z_value + 0.30
        text_y_right = distribution.pdf(z_value) * 1
        plt.text(
            text_x_right,
            float(text_y_right),
            "Rechazo H₀",
            color="black",
            horizontalalignment="left",
        )

        text_x_right = 0
        text_y_right = distribution.pdf(0)/2
        plt.text(
            text_x_right,
            float(text_y_right),
            "Aceptación H₀",
            color="black",
            horizontalalignment="center",
        )

        # Agregar texto para el área resaltada de la cola izquierda
        text_x_left = -2
        text_y_left = distribution.pdf(z_value) * 1
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
