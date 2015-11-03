#!/usr/bin/env node

if (process.argv.length < 4) {
  console.error(
    'Needs at least 2 arguments.\n' +
    'Usage: autocli <package> <function> <...arguments>'
  );
  process.exit(1);
}

console.log(
  require(process.argv[2])[process.argv[3]]
    .apply(this, process.argv.slice(4))
);
