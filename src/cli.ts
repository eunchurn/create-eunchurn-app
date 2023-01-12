#!/usr/bin/env node

import { create } from "create-create-app";
import { resolve } from "path";

const templateRoot = resolve(__dirname, "..", "templates");

const caveat = `
Happy coding!!
`;

create("create-eunchurn-app", {
  templateRoot,
  promptForPackageManager: true,
  caveat,
});
