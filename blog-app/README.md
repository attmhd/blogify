
# Blogify V1.0

This is the final project for the web development course ( UAS Project ).

## Tech Stack

[![My Skills](https://skillicons.dev/icons?i=laravel,mysql,vite,tailwind)](https://skillicons.dev)

- Laravel 11 & Filament for admin panel
- Laravel Inertia for reader pages

## Demo

[![Watch this video](https://img.youtube.com/vi/MGL7Djz-oLc0.jpg)](https://www.youtube.com/watch?v=MGL7Djz-oLc)
## Installation

Clone project

```bash
git clone https://github.com/attmhd/blogify.git
```
Go to project directory

```bash
  cd blogify/blog-app
```
Rename **env.example** to **.env**

Install depedencies

```bash
composer install
npm install
```
Generate Key

```bash
php artisan key:generate
```    

Migrate Database
```bash
php artisan migrate
```

Running project

```bash
php artisan serve
npm run dev
```    


## Next Features
 - Integrate with Writer Assistant ( LLama model )
    
## Authors

- [@attmhd](https://github.com/attnmhd/)