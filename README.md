#@ninternal/react-beautiful-dnd 
## its a fork from [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)
## Basic usage

Use props to avoid scroll when `onDragStart`
- `isVerticalAutoScrollDisabled`
- `isHorizontalAutoScrollDisabled`

```js
import React from 'react';
import { DragDropContext } from '@ninternal/react-beautiful-dnd';

class App extends React.Component {
  onBeforeCapture = () => {
    /*...*/
  };

  onBeforeDragStart = () => {
    /*...*/
  };

  onDragStart = () => {
    /*...*/
  };
  onDragUpdate = () => {
    /*...*/
  };
  onDragEnd = () => {
    // the only one that is required
  };

  render() {
    return (
      <DragDropContext
        onBeforeCapture={this.onBeforeCapture}
        onBeforeDragStart={this.onBeforeDragStart}
        onDragStart={this.onDragStart}
        onDragUpdate={this.onDragUpdate}
        onDragEnd={this.onDragEnd}
        isVerticalAutoScrollDisabled      // <-
        isHorizontalAutoScrollDisabled    // <-
      >
        <div>Hello world</div>
      </DragDropContext>
    );
  }
}
```
