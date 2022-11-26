## React-Bootstrap-Toasts

> Dynamically create [react-bootstrap toasts](https://react-bootstrap.github.io/components/toasts/) via a simple api.

## Live demo

https://jukanntenn.github.io/react-bootstrap-toasts/

## Installation

```
# npm
npm install react-bootstrap-toasts

# yarn
yarn add react-bootstrap-toasts

# pnpm
pnpm add react-bootstrap-toasts
```

## Basic Usage

1: Wrap your app inside a `ToastsProvider` component:

```tsx
import { ToastsProvider as BootstrapToastsProvider } from 'react-bootstrap-toasts';

<BootstrapToastsProvider>
  <App />
</BootstrapToastsProvider>;
```

2: Use `useToasts` hook:

```tsx
import { Button } from 'react-bootstrap';
import { useToasts } from 'react-bootstrap-toasts';

function App() {
  const toasts = useToasts();

  return (
    <Button
      onClick={() => {
        toasts.show({
          headerContent: 'Bootstrap',
          bodyContent: 'Toast body content.',
          toastProps: {
            bg: 'primary',
          },
        });
      }}
    >
      Show toast
    </Button>
  );
}
```

## Toast Options

`toasts.show` method accepts a `toastOptions` argument to control behavior of the created toast. Here is `toastOptions` type definition:

```typescript
type ToastOptions<T extends ToastProps> = {
  headerContent: string | JSX.Element;
  bodyContent: string | JSX.Element;
  toastProps?: T;
  toastHeaderProps?: ToastHeaderProps;
  toastBodyProps?: BsPrefixProps & HTMLAttributes<ElementType>;
};
```

**headerContent**: Child elements of react-bootstrap `Toast.Header` component.

**bodyContent**: Child elements of react-bootstrap `Toast.Body` component.

**toastProps**: A `ToastProps` object which will be passed down to react-bootstrap `Toast` component.

**toastHeaderProps**: A `ToastHeaderProps` object which will be passed down to react-bootstrap `Toast.Header` component.

**toastBodyProps**: A object which will be passed down to react-bootstrap `Toast.Body` component.

For example, to create an autohide toast with contextual danger variation:

```tsx
import { Button } from 'react-bootstrap';
import { useToasts } from 'react-bootstrap-toasts';

function App() {
  const toasts = useToasts();

  return (
    <Button
      onClick={() => {
        toasts.show({
          headerContent: <span className="me-auto">Bootstrap</span>,
          bodyContent: 'Toast body content.',
          toastProps: {
            bg: 'danger',
            autohide: true,
            delay: 3000,
          },
        });
      }}
    >
      Show toast
    </Button>
  );
}
```

For more details, please check [react-bootstrap toasts API](https://react-bootstrap.github.io/components/toasts/#api).

## Toast Container Props

`ToastsProvider` accepts a `toastContainerProps` prop, which is a `ToastContainerProps` object that will be passed down to react-boostrap `ToastContainer` component.

Usually you want this to control the position where toasts to place or apply additional css style to the toast container.

The example below shows how to set all toasts should be placed at top-end of the viewport and also set the toast container's padding:

```tsx
import { ToastsProvider as BootstrapToastsProvider } from 'react-bootstrap-toasts';

<BootstrapToastsProvider toastContainerProps={{ position: 'top-end', className: 'p-2' }}>
  <App />
</BootstrapToastsProvider>;
```

## Limit number of toasts

The default number of toasts displayed is infinite. You can set `limit` to control maximum number of toasts displayed on screen. If number of toasts exceeds this value, oldest toast would be removed.

```tsx
import { ToastsProvider as BootstrapToastsProvider } from 'react-bootstrap-toasts';

<BootstrapToastsProvider limit={3}>
  <App />
</BootstrapToastsProvider>;
```

## Hide Toast

The `toasts.show` method returns an id of the created toast which can be used to hide the toast manually via `toasts.hide` method:

```tsx
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import type { ToastIdType } from 'react-bootstrap-toasts';
import { useToasts } from 'react-bootstrap-toasts';

function App() {
  const toasts = useToasts();
  const [toastId, setToastId] = useState<ToastIdType | undefined>();
  {
    toastId === undefined ? (
      <Button
        className="me-3"
        onClick={() => {
          const id = toasts.show({
            headerContent: <span className="me-auto">Bootstrap</span>,
            bodyContent: 'Toast body content.',
          });
          setToastId(id);
        }}
      >
        Show toast
      </Button>
    ) : (
      <Button
        variant="danger"
        onClick={() => {
          toasts.hide(toastId);
          setToastId(undefined);
        }}
      >
        Hide toast
      </Button>
    );
  }
}
```

## Shotcut methods

react-bootstrap provides some [contextual variations of toasts](https://react-bootstrap.github.io/components/toasts/#contextual-variations). react-bootstrap-toasts provides a corresponding shortcut method for each contextual variation. For example:

```typescript
const toasts = useToasts();

// create a contextual warning toast
toasts.warning({
  headerContent: <span className="me-auto">Bootstrap</span>,
  bodyContent: 'Toast body content.',
});

// is equivalent to
toasts.show({
  headerContent: <span className="me-auto">Bootstrap</span>,
  bodyContent: 'Toast body content.',
  toastBodyProps: {
    bg: 'warning',
  },
});
```

**All available shortcut methods:**

```typescript
toasts.info(toastOptions: ToastOptions<ToastPropsOmitBg>): ToastIdType;

toasts.primary(toastOptions: ToastOptions<ToastPropsOmitBg>): ToastIdType;

toasts.secondary(toastOptions: ToastOptions<ToastPropsOmitBg>): ToastIdType;

toasts.success(toastOptions: ToastOptions<ToastPropsOmitBg>): ToastIdType;

toasts.danger(toastOptions: ToastOptions<ToastPropsOmitBg>): ToastIdType;

toasts.warning(toastOptions: ToastOptions<ToastPropsOmitBg>): ToastIdType;

toasts.dark(toastOptions: ToastOptions<ToastPropsOmitBg>): ToastIdType;

toasts.light(toastOptions: ToastOptions<ToastPropsOmitBg>): ToastIdType;
```

## TODO

- [ ] Improving documentation.
- [ ] Smoother animation of toast transition.
