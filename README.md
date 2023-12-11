# Astro Dashboard Starter

<img width="1429" alt="Screenshot 2023-12-10 at 10 57 32 PM" src="https://github.com/alexwhitmore/astro-dashboard/assets/57722812/b997e387-b60c-4405-8e36-302ff2ec1cd5">

An open source dashboard project using Astro with API endpoints, Tailwind, and Supabase.

> [!WARNING]
> This is a work-in-progress in very early stages and will definitely undergo significant changes. Please feel free to track the progress on [X/Twitter](https://twitter.com/theAlexWhitmore).

## Purpose

Astro has recently released 4.0 and is no longer just for content heavy websites (hasn't been for a while). I want to build out a "web-like" application using as many of the features as possible to see if I can find the limits of Astro. This project will remain open source and eventually be submitted as a [theme](https://astro.build/themes/) to Astro.

## Getting started

1. Clone the repository:

```cli
git clone https://github.com/alexwhitmore/astro-dashboard.git my-project
```

2. Install dependencies:

```cli
npm install
```

3. Copy `.env.example` to `.env` and update the variables:

```cli
cp .env.example .env
```

4. Start the development server:

```cli
npm run dev
```

## Technology Used

| Technology                       | Purpose                      | Link                                                 |
| -------------------------------- | ---------------------------- | ---------------------------------------------------- |
| Astro                            | Frontend and API endpoints   | [Docs](https://docs.astro.build/en/getting-started/) |
| TailwindCSS                      | Styling                      | [Docs](https://tailwindcss.com/)                     |
| TailwindUI                       | Component Library            | [Docs](https://tailwindui.com/)                      |
| HeadlessUI                       | Accessible Component Library | [Docs](https://headlessui.com/)                      |
| React                            | UI Library                   | [Docs](https://react.dev/)                           |
| Tremor                           | Charts UI Library            | [Docs](https://www.tremor.so/)                       |
| Supabase                         | Database/storage/auth        | [Docs](https://supabase.com/)                        |
| Hero Icons (switching to Lucide) | Icons                        | [Docs](https://heroicons.com/)                       |
| Lucide Icons                     | Icons                        | [Docs](https://lucide.dev/)                          |

## Planned Features

- Landing Page
- Blog (with content collection)
- Authentication (Email/password & OAuth)
- Role-based access
- GitHub actions for deployment
- User dashboard

If you have any other ideas of features I should add, please feel free to open up an issue or message me on [X/Twitter](https://twitter.com/theAlexWhitmore)!
