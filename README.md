## Clone repo

```
git clone https://github.com/my-org-work-upwork/turborepo-firebase.git
```

## Add your firebase project id in .firebaserc file

```json
{
  "projects": {
    "default": "<your project id>"
  }
}
```

## Bootstap the repo locally

```sh
npm install
npm run build
```

## Deploy api functions

```sh
npm run deploy:api
```

## Run api in dev mode

```sh
npm run dev:api
```

## Run @shared/core package in dev mode

```sh
npm run dev:core
```

## Run next.js web app in dev mode

```sh
npm run dev:web
```
