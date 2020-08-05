/**
 * Copyright 2017 Google Inc. All rights reserved.
 * Copyright 2019 Greg Lutostanski, Modified from example
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const puppeteer = require('puppeteer');
const input = process.argv[2];
const output = process.argv[3];

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(input, {waitUntil: 'networkidle2'});
  await page.pdf({path: output, format: 'A4'});
  await browser.close();
})();
