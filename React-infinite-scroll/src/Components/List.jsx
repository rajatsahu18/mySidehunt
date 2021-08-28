import React from "react";
import { ListItem } from "./ListItem";

const data = new Array(25).fill(1);

export const List = () => {
  const [state, setState] = React.useState(data);

  const scrolling = React.useRef();

  React.useEffect(() => {
    scrolling.current = true;
  }, []);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrolling.current) {
        const {
          scrollHeight,
          clientHeight,
          scrollTop
        } = document.documentElement;
        if (clientHeight + scrollTop >= scrollHeight - 400) {
          setState((prev) => [...prev, ...data]);
        }
        scrolling.current = false;
        setTimeout(() => {
          scrolling.current = true;
        }, 1000);
      }
    });
  }, []);

  return (
    <div>
      <div>
        <h2>React Infinite Scroll</h2>
      </div>
      <div>
        {state.map((_, props) => {
          return <ListItem key={props} props={props} />;
        })}
      </div>
    </div>
  );
};
