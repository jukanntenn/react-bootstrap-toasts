import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import type { ToastIdType } from 'react-bootstrap-toasts';
import { useState } from 'react';
import { useToasts } from 'react-bootstrap-toasts';

function App() {
  const toasts = useToasts();
  const [toastId, setToastId] = useState<ToastIdType | undefined>();

  const variants: Array<
    'info' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'dark' | 'light'
  > = ['info', 'primary', 'secondary', 'success', 'danger', 'warning', 'dark', 'light'];

  return (
    <div className="App">
      <Container>
        <h3>Basic</h3>
        <Button
          onClick={() => {
            toasts.show({
              headerContent: <span className="me-auto">Hi, I'm the basic toast header.</span>,
              bodyContent: "Hi, I'm the toast body.",
              toastProps: {
                bg: 'primary',
              },
            });
          }}
        >
          Show basic toast
        </Button>

        <h3 className="mt-5">Autohide</h3>
        <Button
          variant="primary"
          onClick={() => {
            toasts.show({
              headerContent: <span className="me-auto">Hi, I'm a auto hide toast header.</span>,
              bodyContent: "Hi, I'm a auto hide toast body.",
              toastProps: {
                bg: 'primary',
                autohide: true,
                delay: 3000,
              },
            });
          }}
        >
          Show auto hide toast
        </Button>

        <h3 className="mt-5">Contextual variations</h3>
        {variants.map((variant) => {
          return (
            <Button
              key={variant}
              className="me-3 mb-3"
              variant={variant}
              onClick={() => {
                toasts[variant]({
                  headerContent: <span className="me-auto">Hi, I'm a {variant} toast header.</span>,
                  bodyContent: "Hi, I'm the  toast body.",
                  toastBodyProps: {
                    className: variant === 'dark' ? 'text-white' : undefined,
                  },
                });
              }}
            >
              Show {variant} toast
            </Button>
          );
        })}

        <h3 className="mt-5">Show and Hide</h3>
        {toastId === undefined ? (
          <Button
            className="me-3"
            onClick={() => {
              const id = toasts.show({
                headerContent: <span className="me-auto">Hi, I'm the basic toast header.</span>,
                bodyContent: "Hi, I'm the toast body.",
                toastProps: {
                  bg: 'primary',
                },
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
        )}
      </Container>
    </div>
  );
}

export default App;
