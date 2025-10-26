---
layout: default
title: The Vault
permalink: /vault/
---
<div class="card"><h1>The Vault</h1>
{% assign items = site.dossiers | sort: "date" | reverse %}
{% if items.size == 0 %}
  <p><em>No dossiers yet. Submit one to begin the archive.</em></p>
{% else %}
  <ul class="vault">
  {% for d in items %}
    <li><a href="{{ d.url | relative_url }}">{{ d.title }}</a>
    <span class="meta">by {{ d.author }} • {{ d.date | date: "%Y-%m-%d" }}</span></li>
  {% endfor %}
  </ul>
{% endif %}
</div>
