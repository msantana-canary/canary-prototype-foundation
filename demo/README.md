# Canary UI Demo Site

This is the demo and documentation site for `@canary-ui/components`.

## Running Locally

```bash
# From the demo directory
pnpm install
pnpm dev
```

Or from the root:

```bash
pnpm dev
```

## Building

```bash
pnpm build
```

## Structure

- `app/` - Next.js 14 app directory
- `public/` - Static assets

## Notes

This demo site consumes the `@canary-ui/components` package as an external dependency using pnpm workspaces. This ensures the demo always reflects what external users will experience when using the library.
