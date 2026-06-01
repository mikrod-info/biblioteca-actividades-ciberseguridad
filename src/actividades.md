---
layout: base
title: Actividades
---

# Actividades prácticas

Esta sección reúne las actividades educativas disponibles en la biblioteca.

<div class="actividades-grid">

{%- for actividad in collections.actividades -%}

<article class="actividad-card">

    <p class="actividad-icono">
        {{ actividad.data.icon }}
    </p>

    <h2 class="card-title">
        <a href="{{ actividad.url | url }}">
            {{ actividad.data.title }}
        </a>
    </h2>

    <p>
        {{ actividad.data.description }}
    </p>

    <p class="actividad-duracion">
        ⏱️ {{ actividad.data.duracion }}
    </p>

    {%- if actividad.data.tags -%}

    <div class="actividad-tags">

        {%- for tag in actividad.data.tags -%}

        <span class="tag">
            {{ tag }}
        </span>

        {%- endfor -%}

    </div>

    {%- endif -%}


</article>

{%- endfor -%}

</div>