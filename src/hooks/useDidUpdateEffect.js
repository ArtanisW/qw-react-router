// 自定义hook
// e.g. 模拟DidUpdateEffect生命周期
import { useRef, useEffect } from 'react';
export default function useDidUpdateEffect(fn, inputs) {
  const didMountRef = useRef(false);
  useEffect(() => {
    if (didMountRef.current) fn();
    else didMountRef.current = true;
  }, inputs);
}
