---
templateKey: blog-post
title: Install NPM Package from a Git Repo
date: 2018-10-21T15:04:10.000Z
description: The more you know...
tags:
  - JavaScript
---

Did you know you can <code>npm install</code> from a Git Repository?

I didn't.

I started out as a backend Java engineer before transitioning to full stack as my role with my company at the time grew.  Today, I am heavily front-end leaning. Actually, I work almost exclusively on the front-end.

During my transition to full stack I was introduced to the npm package manager, but only what I needed to know at the time - <code>npm install</code>, <code>npm uninstall</code>, <code>npm update</code> -- heck, even installing specific versions!  Year in and year out, that was all I really needed.

Until recently.

## What Changed?

At work, we are transitioning to React single page applications.  Initially, we only needed one.  Now, we are on our third and we plan to create more.  Our process for starting a new one was to copy an existing SPA and then strip out the app-specific code to get back to a base setup, then start building.

Not ideal.

In my free time, I set out to create a base project repo that we could clone for our new SPAs.  Creating the base project was easy enough, but why stop there?  I decided to take it a step further and create a custom CLI for generating base projects.

Now, I had to make this CLI available to engineers at the company.  But how?  I couldn't publish it to the npm registry as the base project it used contained proprietary code.  So, now what?

## npm install to the rescue

A wise colleague of mine mentioned I could just <code>npm install</code> from the private CLI repo!  After learning this, I finally dug into the documentation, specifically for <a href="https://docs.npmjs.com/cli/install" target="_blank" rel="noopener">npm install</a>.  From there we see:


```
npm install (with no args, in package dir)
npm install [<@scope>/]<name>
npm install [<@scope>/]<name>@<tag>
npm install [<@scope>/]<name>@<version>
npm install [<@scope>/]<name>@<version range>
npm install <git-host>:<git-user>/<repo-name>
npm install <git repo url>
npm install <tarball file>
npm install <tarball url>
npm install <folder>

alias: npm i
common options: [-P|--save-prod|-D|--save-dev|-O|--save-optional] [-E|--save-exact] [-B|--save-bundle] [--no-save] [--dry-run]
```


As you can see, there are plenty of ways to use <code>npm install</code>.  I'd like to specifically point out:

```
npm install <git repo url></git>
```

Just beautiful.

Now, for an engineer at my company to install the CLI I created, they only need to run:


```
npm install -g <private CLI git repo url>
```


After that, they are free to use the CLI from any directory.  Easy!

## What About Yarn?

This can also be done using Yarn via yarn add.

From the Yarn <a href="https://yarnpkg.com/en/docs/cli/add" target="_blank" rel="noopener">docs</a>, we see:


```
yarn add <git remote url>
```

So, similarly, for an engineer to install my CLI via yarn, they need to run:


```
yarn global add <private CLI git repo url>
```


## And that's it!

It was interesting to learn that little bit of the npm CLI.  Poking around the documentation has shown me another thing or two.  If like me, you didn't know about some of these extra <code>npm install</code> powers, I hope you found this interesting and potentially useful.