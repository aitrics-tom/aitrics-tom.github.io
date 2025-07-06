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
    before: 1
    after: 3
---

<div class="blog-container">
  <!-- Hero Section -->
  <div class="blog-hero">
    <h1>Yellow Gradients</h1>
    <p class="blog-subtitle">{{ site.blog_description }}</p>
  </div>

  <!-- Search Bar -->
  <div class="blog-search">
    <input type="text" placeholder="Search posts..." id="blog-search-input">
    <button type="submit"><i class="fas fa-search"></i></button>
  </div>

  <!-- Featured Posts and Categories Section -->
  {% assign featured_posts = site.posts | where: "featured", "true" %}
  {% if featured_posts.size > 0 %}
  <div class="featured-and-categories-section" style="display: grid; grid-template-columns: 2fr 1fr; gap: 2rem; margin-bottom: 3rem; align-items: start;">
    <div class="featured-posts-grid">
      {% for post in featured_posts limit:2 %}
      <article class="featured-card">
        <span class="featured-badge">Featured</span>
        {% if post.thumbnail %}
        <div class="featured-image">
          <img src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }}">
        </div>
        {% endif %}
        <div class="featured-content">
          <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
          <div class="featured-meta">
            <span class="reading-time">{{ post.content | number_of_words | divided_by: 180 | plus: 1 }} min</span>
            <span class="post-date">{{ post.date | date: "%b %d, %Y" }}</span>
          </div>
          <p class="featured-description">{{ post.description }}</p>
        </div>
      </article>
      {% endfor %}
    </div>
    
    <!-- Sidebar -->
    <aside class="category-sidebar">
      <h3>Categories & Tags</h3>
      <div class="category-list">
        {% if site.display_categories %}
          {% for category in site.display_categories %}
            {% assign cat_posts = site.posts | where_exp: "post", "post.categories contains category" %}
            <a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}" class="category-item">
              <span>{{ category }}</span>
              <span class="category-count">{{ cat_posts.size }}</span>
            </a>
          {% endfor %}
        {% endif %}
        
        {% if site.display_tags %}
          {% for tag in site.display_tags %}
            {% assign tag_posts = site.posts | where_exp: "post", "post.tags contains tag" %}
            <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}" class="category-item">
              <span>#{{ tag }}</span>
              <span class="category-count">{{ tag_posts.size }}</span>
            </a>
          {% endfor %}
        {% endif %}
      </div>
    </aside>
  </div>
  <hr style="margin: 3rem 0; border: none; border-top: 1px solid rgba(255, 224, 102, 0.3);">
  {% endif %}

  <!-- Regular Posts List -->
  <div class="modern-post-list">
    {% if page.pagination.enabled %}
      {% assign postlist = paginator.posts %}
    {% else %}
      {% assign postlist = site.posts %}
    {% endif %}

    {% for post in postlist %}
    {% unless post.featured %}
    <article class="post-item">
      <div class="post-content-wrapper">
        {% if post.thumbnail %}
        <div class="post-thumbnail">
          <img src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }}">
        </div>
        {% endif %}
        <div class="post-details">
          <h2>
            {% if post.redirect == blank %}
              <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            {% elsif post.redirect contains '://' %}
              <a href="{{ post.redirect }}" target="_blank">{{ post.title }}
                <i class="fas fa-external-link-alt" style="font-size: 0.7em;"></i>
              </a>
            {% else %}
              <a href="{{ post.redirect | relative_url }}">{{ post.title }}</a>
            {% endif %}
          </h2>
          
          <div class="post-meta-info">
            <span class="meta-item">
              <i class="fas fa-clock"></i>
              {{ post.content | number_of_words | divided_by: 180 | plus: 1 }} min read
            </span>
            <span class="meta-item">
              <i class="fas fa-calendar-alt"></i>
              {{ post.date | date: "%B %d, %Y" }}
            </span>
            {% if post.external_source %}
            <span class="meta-item">
              <i class="fas fa-link"></i>
              {{ post.external_source }}
            </span>
            {% endif %}
          </div>
          
          <p class="post-excerpt">{{ post.description | default: post.excerpt | strip_html | truncate: 250 }}</p>
          
          {% if post.tags.size > 0 or post.categories.size > 0 %}
          <div class="post-tags-list">
            {% for tag in post.tags %}
              <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}" class="tag-item">#{{ tag }}</a>
            {% endfor %}
            {% for category in post.categories %}
              <a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}" class="tag-item">{{ category }}</a>
            {% endfor %}
          </div>
          {% endif %}
        </div>
      </div>
    </article>
    {% endunless %}
    {% endfor %}
  </div>

  <!-- Pagination -->
  {% if page.pagination.enabled %}
  <nav class="modern-pagination">
    {% if paginator.previous_page %}
    <div class="page-item">
      <a href="{{ paginator.previous_page_path | relative_url }}">
        <i class="fas fa-chevron-left"></i>
      </a>
    </div>
    {% else %}
    <div class="page-item disabled">
      <span><i class="fas fa-chevron-left"></i></span>
    </div>
    {% endif %}

    {% for i in (1..paginator.total_pages) %}
      {% if i == paginator.page %}
      <div class="page-item active">
        <span>{{ i }}</span>
      </div>
      {% else %}
      <div class="page-item">
        <a href="{{ site.baseurl }}/blog/{% if i > 1 %}page/{{ i }}/{% endif %}">{{ i }}</a>
      </div>
      {% endif %}
    {% endfor %}

    {% if paginator.next_page %}
    <div class="page-item">
      <a href="{{ paginator.next_page_path | relative_url }}">
        <i class="fas fa-chevron-right"></i>
      </a>
    </div>
    {% else %}
    <div class="page-item disabled">
      <span><i class="fas fa-chevron-right"></i></span>
    </div>
    {% endif %}
  </nav>
  {% endif %}
</div>

<script>
// Simple search functionality
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('blog-search-input');
  const posts = document.querySelectorAll('.post-item, .featured-card');
  
  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      const searchTerm = e.target.value.toLowerCase();
      
      posts.forEach(post => {
        const title = post.querySelector('h2, h3').textContent.toLowerCase();
        const content = post.textContent.toLowerCase();
        
        if (title.includes(searchTerm) || content.includes(searchTerm)) {
          post.style.display = '';
        } else {
          post.style.display = 'none';
        }
      });
    });
  }
});
</script>