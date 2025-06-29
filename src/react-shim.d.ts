declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare module 'react' {
  export interface FC<P = {}> {
    (props: P): any;
  }
  export function useEffect(
    effect: () => void | (() => void),
    deps?: any[]
  ): void;
  export function useState<T>(init: T): [T, (v: T) => void];
  const Fragment: any;
  export { Fragment };
}

declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare module 'react-dom/client' {
  export function createRoot(container: Element | DocumentFragment): { render(children: any): void };
}
