# Storybook

In project:

`npx -p @storybook/cli sb init --type angular`

Angular 8 troubleshooting:

In `package.json`:
```
"devDependencies": {
    "raw-loader": "^1.0.0",
    ...
}
```
In `.storybook/tsconfig.json`:

```
"compilerOptions": {
    "emitDecoratorMetadata": true
},
```
