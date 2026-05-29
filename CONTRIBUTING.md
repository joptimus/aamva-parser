# Contributing to aamva-parser

Thanks for your interest in contributing! Here's how to get started.

## Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/<your-username>/aamva-parser.git
   cd aamva-parser
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a branch for your change:
   ```bash
   git checkout -b my-feature
   ```

## Development

### Building

```bash
npm run build
```

### Running Tests

```bash
npm test
```

Please ensure all tests pass before submitting a pull request.

## Submitting Changes

1. Commit your changes with a clear message
2. Push to your fork
3. Open a pull request against `main`

### Pull Request Guidelines

- Keep changes focused — one feature or fix per PR
- Add tests for new functionality
- Update documentation if your change affects the public API
- Ensure `npm test` passes

## Reporting Bugs

Open an [issue](https://github.com/joptimus/aamva-parser/issues) with:

- A clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- AAMVA version affected (if applicable)

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).
