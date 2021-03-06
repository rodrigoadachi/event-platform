## ๐  Skills

![react](https://img.shields.io/badge/react-1E4174?style=for-the-badge&logo=react&logoColor=white) ![graphql](https://img.shields.io/badge/graphql-1E4174?style=for-the-badge&logo=graphql&logoColor=white) ![apollo client](https://img.shields.io/badge/apollo%20client-1E4174?style=for-the-badge&logo=apollographql&logoColor=white) ![tailwind css](https://img.shields.io/badge/tailwind%20css-1E4174?style=for-the-badge&logo=tailwindcss&logoColor=white) ![vite](https://img.shields.io/badge/vite-1E4174?style=for-the-badge&logo=vite&logoColor=white)

## ๐ Roadmap

- [x] Use **Sass** ( `.scss`) and use the  `@apply`from **Tawildin CSS** to avoid longer `classNames` on **JSX**;
- [x] Use same layout as home page (without form) to shwo on route ยด/event` when user don't select any lesson;
- [x] Protect coming soon lessons;
    - If user try access the `/event/lesson/:slug` route manually, is redirected to previous route;
    - The lesson card renders a `div` instead a `Link` for coming soon lessons.
- [x] Storage event details on **GraphCMS**

## ๐พ Environment Variables
To run this project, you will need to add the following environment variables to your `.env.local` file:
- **`VITE_APP_API_URL`:** **GraphCMS** API Link (used on **Apollo Client**)
- **`VITE_APP_API_TOKEN`:** **GraphCMS** Token (used on **Apollo Client** to)

## ๐ Live Version

[![vercel](https://img.shields.io/badge/vercel-000?style=for-the-badge&logo=vercel&logoColor=white)](https://event-platform-vert.vercel.app/)

## Installation

```sh
git clone gh repo clone rodrigoadachi/event-platform
cd event-platform
npm i
node run dev
```

For local environment

```sh
touch .env.local
VITE_API_URL="https://api-eu-west-2.graphcms.com/v2/your-tocken/master"
VITE_API_ACCESS_TOKEN="your-tocken"
```

## ๐  Screenshots

![Screenshot Subscriber](src/assets/screenshot/subscriber.png)
![Screenshot Event](src/assets/screenshot/event.png)


## License
MIT

## ๐ More About Me
[
![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)
](https://www.linkedin.com/in/rodrigoadachi/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/rodrigoadachi)
