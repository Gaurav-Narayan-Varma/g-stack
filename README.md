## The stack

Created buy Gaurav, the stack is the following:
- Next.js
- Hono
- tRPC + TanStack Query
- Better Auth
- Drizzle
- Neon
- Biome (linter and formatter)

## Set up

Step 1: Run `pnpm i`

Step 2: Configure your .env variables

```
DATABASE_URL=

# X Social Sign-On
TWITTER_CLIENT_ID=
TWITTER_CLIENT_SECRET=
```

Step 3: Run the migrations

```
npx drizzle-kit migrate 
```

Step 4: Run `pnpm dev`
