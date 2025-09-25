---
layout: default
title: Home
---

# Ghosthood
No mysticism. No marketing fog. Just the privacy moves that actually change your risk profile.

- **Latest**
{% assign posts = site.posts | sort: 'date' | reverse %}
{% for post in posts limit:5 %}
- [{{ post.title }}]({{ post.url }}) – {{ post.date | date: "%b %-d, %Y" }}
{% endfor %}