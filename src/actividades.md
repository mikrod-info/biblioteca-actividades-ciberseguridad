---
layout: base
title: Actividades prácticas
---

Esta sección reúne las actividades educativas disponibles en la biblioteca. Cada propuesta incluye objetivos, materiales necesarios, sugerencias para su implementación y observaciones surgidas durante experiencias reales de aplicación.

{% for actividad in collections.actividades %}

## [{{ actividad.data.title }}]({{ actividad.url }})

{{ actividad.data.description }}

{% if actividad.data.duracion %}
**Duración estimada:** {{ actividad.data.duracion }}
{% endif %}

{% if actividad.data.publico %}
**Público destinatario:** {{ actividad.data.publico | join(", ") }}
{% endif %}

{% if actividad.data.temas %}
**Temas:** {{ actividad.data.temas | join(", ") }}
{% endif %}

[Ver actividad completa →]({{ actividad.url }})

---

{% endfor %}
