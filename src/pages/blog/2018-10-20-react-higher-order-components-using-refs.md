---
templateKey: blog-post
title: React Higher-Order Component Using Refs
date: 2018-10-20T15:04:10.000Z
description: How to make your higher-order component play nice with your stateless functional components.
tags:
  - React
  - JavaScript
---

A higher-order component (HOC) is an advanced technique in React for reusing component logic.  Basically, a higher-order component is a function that takes a component and returns a new component.

I like to consider myself pretty comfortable with HOCs.  I've written quite a few of them in the years I've been using React.  However, I came across an interesting error recently.

## The Issue

Consider a HOC that, among other things, accesses the wrapped component via a ref.  The HOC works without issue... until it's used to wrap a stateless functional component.  Then, the following error is logged in the console:


```
Stateless function components cannot be given refs. Attempts to access this ref will fail.
```


So, a component might need most of the functionality of a HOC, just not the ref related code, and it can't use it!

You might be thinking, "Simple fix.  I'd just make the component I'm wrapping a class-based component."  Yes, that's one way.  But how about a way where you can maintain your functional component?  There had to be another solution.

## The Solution

The solution lies in having the HOC be able to recognize a difference between a class-based component and a stateless functional component.  In this case, it's the fact that class-based components extend React's Component class.  Class-based components need to have a render method, so the existence of that method can determine whether or not a component is stateful.  Once that is known, the wrapped component can be conditionally given a ref.  See the code below for a stripped down example of a HOC like this:


```javascript
import React, { Component } from 'react';

export default EnhancedComponent => {
  return class SomeHOC extends Component {
    constructor() {
      super();

      // check the prototype of the wrapped component's prototype for render
      // if render is not undefined, then the component is stateful, and can have a ref
      this._isStateful = (EnhancedComponent.prototype.render !== undefined);
    }

    /* Other HOC code would go here */

    render() {
      const allProps = {
        // spread all passed in props
        // you'd also add any other props to pass to wrapped components here
        ...this.props
      };

      // if the component is stateful, give it a ref.  Yay!
      if (this._isStateful) {
        allProps.ref = node => { this._wrappedInstance = node; };
      }

      return (
        <EnhancedComponent
          {...allProps}
        />
      );
    }
  };
};
```


And there you have it!  I know this might seem like a pretty specialized case, and it is.  However, if you have a HOC that sometimes needs access to a ref while also being able to wrap stateless functional components, then this should work for you.