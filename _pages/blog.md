---
layout: default
permalink: /blog/
title: blog
nav: true
nav_order: 1
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1 # The number of links before the current page
    after: 3 # The number of links after the current page
---

<div class="post blog-yellow-theme">

<style>
.yellow-gradients-handwriting {
  font-family: 'Dancing Script', 'Pacifico', cursive !important;
  font-size: 6rem !important;
  font-weight: 700 !important;
  color: #FFD700 !important;
  text-shadow: 
    0 0 10px rgba(255, 215, 0, 0.5),
    0 0 20px rgba(255, 215, 0, 0.3),
    2px 2px 4px rgba(0, 0, 0, 0.2) !important;
  letter-spacing: 0.05em !important;
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
  animation: yellowGlow 3s ease-in-out infinite alternate !important;
  transform: rotate(-1deg) !important;
  display: inline-block !important;
  margin: 1rem 0 !important;
  text-align: center !important;
}

@keyframes yellowGlow {
  0% {
    filter: drop-shadow(0 0 5px rgba(255, 215, 0, 0.5));
    transform: rotate(-1deg) scale(1);
  }
  100% {
    filter: drop-shadow(0 0 15px rgba(255, 215, 0, 0.8));
    transform: rotate(-0.5deg) scale(1.02);
  }
}

.blog-yellow-theme {
  background: linear-gradient(135deg, #FFFBF0 0%, #FFF8E1 100%) !important;
  padding: 2rem 1rem !important;
  border-radius: 1rem !important;
}

.blog-yellow-theme .header-bar {
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 165, 0, 0.05) 100%) !important;
  padding: 2rem 1rem !important;
  border-radius: 1rem !important;
  margin-bottom: 2rem !important;
  border: 2px solid rgba(255, 215, 0, 0.2) !important;
  box-shadow: 0 4px 20px rgba(255, 215, 0, 0.1) !important;
}

.blog-yellow-theme .header-bar h2 {
  color: #B8860B !important;
  font-style: italic !important;
  font-size: 1.4rem !important;
  text-align: center !important;
}

@media (max-width: 768px) {
  .yellow-gradients-handwriting {
    font-size: 4rem !important;
    letter-spacing: 0.02em !important;
  }
}

.blog-yellow-theme .post-list li {
  background: rgba(255, 255, 255, 0.8) !important;
  border: 1px solid rgba(255, 215, 0, 0.3) !important;
  border-radius: 1rem !important;
  padding: 2rem !important;
  margin-bottom: 2rem !important;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.1) !important;
  transition: all 0.3s ease !important;
}

.blog-yellow-theme .post-list li:hover {
  transform: translateY(-3px) !important;
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.2) !important;
  border-color: rgba(255, 165, 0, 0.5) !important;
}

.blog-yellow-theme .post-list .post-title {
  color: #B8860B !important;
  font-weight: 700 !important;
}

.blog-yellow-theme .post-list .post-title:hover {
  color: #DAA520 !important;
}

.blog-yellow-theme .post-list .post-meta,
.blog-yellow-theme .post-list .post-tags {
  color: #CD853F !important;
}

.blog-yellow-theme .post-list .post-meta a,
.blog-yellow-theme .post-list .post-tags a {
  color: #B8860B !important;
}

.blog-yellow-theme .post-list .post-meta a:hover,
.blog-yellow-theme .post-list .post-tags a:hover {
  color: #DAA520 !important;
}

.blog-yellow-theme .tag-category-list {
  background: rgba(255, 215, 0, 0.1) !important;
  padding: 1rem !important;
  border-radius: 0.5rem !important;
  border: 1px solid rgba(255, 215, 0, 0.3) !important;
  margin-bottom: 2rem !important;
}

.blog-yellow-theme .tag-category-list a {
  color: #B8860B !important;
  font-weight: 600 !important;
}

.blog-yellow-theme .tag-category-list a:hover {
  color: #DAA520 !important;
  text-decoration: underline !important;
}

.blog-yellow-theme .featured-posts .card {
  background: rgba(255, 255, 255, 0.9) !important;
  border: 1px solid rgba(255, 215, 0, 0.3) !important;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.1) !important;
}

.blog-yellow-theme .featured-posts .card:hover {
  border-color: rgba(255, 165, 0, 0.5) !important;
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.2) !important;
}

.blog-yellow-theme .featured-posts .card-title {
  color: #B8860B !important;
}
</style>

{% assign blog_name_size = site.blog_name | size %}
{% assign blog_description_size = site.blog_description | size %}

{% if blog_name_size > 0 or blog_description_size > 0 %}

  <div class="header-bar">
    <h1 class="yellow-gradients-handwriting">Yellow Gradients</h1>
    <h2>{{ site.blog_description }}</h2>
  </div>
  {% endif %}

{% if site.display_tags and site.display_tags.size > 0 or site.display_categories and site.display_categories.size > 0 %}

  <div class="tag-category-list">
    <ul class="p-0 m-0">
      {% for tag in site.display_tags %}
        <li>
          <i class="fa-solid fa-hashtag fa-sm"></i> <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}">{{ tag }}</a>
        </li>
        {% unless forloop.last %}
          <p>&bull;</p>
        {% endunless %}
      {% endfor %}
      {% if site.display_categories.size > 0 and site.display_tags.size > 0 %}
        <p>&bull;</p>
      {% endif %}
      {% for category in site.display_categories %}
        <li>
          <i class="fa-solid fa-tag fa-sm"></i> <a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}">{{ category }}</a>
        </li>
        {% unless forloop.last %}
          <p>&bull;</p>
        {% endunless %}
      {% endfor %}
    </ul>
  </div>
  {% endif %}

{% assign featured_posts = site.posts | where: "featured", "true" %}
{% if featured_posts.size > 0 %}
<br>

<div class="container featured-posts">
{% assign is_even = featured_posts.size | modulo: 2 %}
<div class="row row-cols-{% if featured_posts.size <= 2 or is_even == 0 %}2{% else %}3{% endif %}">
{% for post in featured_posts %}
<div class="col mb-4">
<a href="{{ post.url | relative_url }}">
<div class="card hoverable">
<div class="row g-0">
<div class="col-md-12">
<div class="card-body">
<div class="float-right">
<i class="fa-solid fa-thumbtack fa-xs"></i>
</div>
<h3 class="card-title text-lowercase">{{ post.title }}</h3>
<p class="card-text">{{ post.description }}</p>

                    {% if post.external_source == blank %}
                      {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
                    {% else %}
                      {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
                    {% endif %}
                    {% assign year = post.date | date: "%Y" %}

                    <p class="post-meta">
                      {{ read_time }} min read &nbsp; &middot; &nbsp;
                      <a href="{{ year | prepend: '/blog/' | relative_url }}">
                        <i class="fa-solid fa-calendar fa-sm"></i> {{ year }} </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      {% endfor %}
      </div>
    </div>
    <hr>

{% endif %}

  <ul class="post-list">

    {% if page.pagination.enabled %}
      {% assign postlist = paginator.posts %}
    {% else %}
      {% assign postlist = site.posts %}
    {% endif %}

    {% for post in postlist %}

    {% if post.external_source == blank %}
      {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
    {% else %}
      {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
    {% endif %}
    {% assign year = post.date | date: "%Y" %}
    {% assign tags = post.tags | join: "" %}
    {% assign categories = post.categories | join: "" %}

    <li>

{% if post.thumbnail %}

<div class="row">
          <div class="col-sm-9">
{% endif %}
        <h3>
        {% if post.redirect == blank %}
          <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
        {% elsif post.redirect contains '://' %}
          <a class="post-title" href="{{ post.redirect }}" target="_blank">{{ post.title }}</a>
          <svg width="2rem" height="2rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        {% else %}
          <a class="post-title" href="{{ post.redirect | relative_url }}">{{ post.title }}</a>
        {% endif %}
      </h3>
      <p>{{ post.description }}</p>
      <p class="post-meta">
        {{ read_time }} min read &nbsp; &middot; &nbsp;
        {{ post.date | date: '%B %d, %Y' }}
        {% if post.external_source %}
        &nbsp; &middot; &nbsp; {{ post.external_source }}
        {% endif %}
      </p>
      <p class="post-tags">
        <a href="{{ year | prepend: '/blog/' | relative_url }}">
          <i class="fa-solid fa-calendar fa-sm"></i> {{ year }} </a>

          {% if tags != "" %}
          &nbsp; &middot; &nbsp;
            {% for tag in post.tags %}
            <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}">
              <i class="fa-solid fa-hashtag fa-sm"></i> {{ tag }}</a>
              {% unless forloop.last %}
                &nbsp;
              {% endunless %}
              {% endfor %}
          {% endif %}

          {% if categories != "" %}
          &nbsp; &middot; &nbsp;
            {% for category in post.categories %}
            <a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}">
              <i class="fa-solid fa-tag fa-sm"></i> {{ category }}</a>
              {% unless forloop.last %}
                &nbsp;
              {% endunless %}
              {% endfor %}
          {% endif %}
    </p>

{% if post.thumbnail %}

</div>

  <div class="col-sm-3">
    <img class="card-img" src="{{ post.thumbnail | relative_url }}" style="object-fit: cover; height: 90%" alt="image">
  </div>
</div>
{% endif %}
    </li>

    {% endfor %}

  </ul>

{% if page.pagination.enabled %}
{% include pagination.liquid %}
{% endif %}

</div>
