// @flow
import type { Position, Rect } from 'css-box-model';
import type { Viewport } from '../../../types';
import getScroll from './get-scroll';
import { canScrollWindow } from '../can-scroll';

type Args = {|
  viewport: Viewport,
  subject: Rect,
  center: Position,
  dragStartTime: number,
  shouldUseTimeDampening: boolean,
  isVerticalAutoScrollDisabled?: boolean,
  isHorizontalAutoScrollDisabled?: boolean,
|};

export default ({
  viewport,
  subject,
  center,
  dragStartTime,
  shouldUseTimeDampening,
  isVerticalAutoScrollDisabled,
  isHorizontalAutoScrollDisabled,
}: Args): ?Position => {
  const scroll: ?Position = getScroll({
    dragStartTime,
    container: viewport.frame,
    subject,
    center,
    shouldUseTimeDampening,
    isVerticalAutoScrollDisabled,
    isHorizontalAutoScrollDisabled,
  });

  return scroll && canScrollWindow(viewport, scroll) ? scroll : null;
};
